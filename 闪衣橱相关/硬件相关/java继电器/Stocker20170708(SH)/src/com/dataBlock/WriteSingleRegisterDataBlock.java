package com.dataBlock;

/**
 * 把地址为ref的寄存器，写入一个值value
 * @author SunPengFei
 *
 */
public class WriteSingleRegisterDataBlock extends BasicDataBlock {

	public WriteSingleRegisterDataBlock(int ref, int value) {
		// 发出的请求
		request = new byte[12];
		// 用来接收并存储数据的data
		data = new int[6];
		//寄存器起始地址
		this.ref=ref;
		//写入的连续值
		this.value=value;
	}

	/**
	 * MBAP报文头包括7个字节： 1、事务元标识符 （2字节）默认设成0 2、协议标识符 （2字节）=0为MODBUS协议 3、长度
	 * （2字节）后边数据的长度，包括单元标识符1字节 4、单元标识符 （1字节）255和0都可以，但建议设成0
	 * ******************************************************************************** 
	 * 发送和接收示例：
	 * 写单个寄存器发送（0x） 0C AA 	00 00 	00 06 	01 		03 		00 00 	00 01
	 * 					发送序号 	默认		数据长度 	地址号 	功能码 	开始地址 	写入值
	 * 写单个寄存器接收（0x） 0C AA	00 00 	00 06 	01 		03		00 00 	00 01 
	 * 					发送序号	 默认 	数据长度	地址号 	功能码 	输出地址 	接收到的值 
	 * 失败的接收 （0x） 	0C AA 	00 00 	00 09 	01 		86 				01/02/03/04
	 */
	@Override
	public byte[] getRequest() {
		request[0] = 0x00; // 事务元标识符
		request[1] = 0x00; // 事务元标识符
		request[2] = 0x00; // 协议标识符
		request[3] = 0x00; // 协议标识符
		request[4] = 0x00; // 长度
		request[5] = 0x06; // 长度
		request[6] = 0x00; // 单元标识符
		request[7] = 0x06; // 功能码6，写单个寄存器
		request[8] = (byte) (ref / 256); // 寄存器地址高8位
		request[9] = (byte) (ref % 256); // 寄存器地址低8位
		request[10] = (byte) (value / 256); // 写入值的高8位
		request[11] = (byte) (value % 256); // 写入值的低8位
		return request;
		
	}

	/**
	 * 对数据进行处理，将数据写入到data[]中，以下给出一个写单个寄存器的示例：
	 * 写单个寄存器接收（0x） 0C AA 	00 00 	00 06 	01 		03 		06 00 	03 00 
	 * 					发送序号 	默认 		数据长度 	地址号 	功能码 	输出地址 	接收到的字节
	 * bytes[9]是第10位，bytes[2*i+9]可以取到第10位、12位…… bytes[2*i+9] & 0xff) *256 的意思是： 
	 * 取（得到的响应报文中的）寄存器高8位（保持符号位不变，通过&符号实现） 并左移8位（通过*256实现）
	 * **************************************************************
	 * 将套接字响应到的字节数组解析后存到data数组中 因为java语言中没有无符号数，所以int类型的数取值范围是-32768~32767
	 * 但是由两个无符号（通过&0xff实现）的byte组成一个int后，得到的是一个无符号的数
	 * 所以需要判断，如果大于32767，那么，减去65536即可得到正确的值
	 */
	@Override
	public void setResponse(byte[] bytes) {
		// 获得响应，判断响应是否合法
		if (bytes[7] == 0x06) {
			response = new byte[6];
		}else if(bytes[7] == 0x86){
			System.out.println("出现异常功能码0x86，代码"+bytes[8]);
		}
		this.response = bytes;

//		System.out.println("返回的功能码是:"+response[7]);
//		System.out.println("返回的数据第1个是:"+(response[10] & 0xff) * 256+ (response[11] & 0xff));
//		System.out.println("返回的数据第2个是:"+(response[12] & 0xff) * 256+ (response[13] & 0xff));
//		System.out.println("返回的数据第3个是:"+(response[14] & 0xff) * 256+ (response[15] & 0xff));
		//将响应的字节流保存到data[]中去
//		for (int i = 0; i < 1; i++) {
//			data[i] = (response[2 * i + 9] & 0xff) * 256
//					+ (response[2 * i + 10] & 0xff);
//			if (data[i] > 32767) {
//				data[i] = data[i] - 65536;
//			}
//		}
		
		data[0] = (response[10] & 0xff) * 256+ (response[11] & 0xff);
		if (data[0] > 32767) {
			data[0] = data[0] - 65536;
		}
	}
}
