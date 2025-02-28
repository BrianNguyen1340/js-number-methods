// * 1. Các phương thức của Number
// * Chuyển đổi và định dạng số
/**
 *  var Number: NumberConstructor
    (value?: any) => number
 *  Chuyển đổi giá trị về kiểu number
 */
console.log(Number('123')) // 123
console.log(Number('123.45')) // 123.45
console.log(Number('abc')) // NaN

/**
 *  function parseInt(string: string, radix?: number): number
 *  Chuyển đổi chuỗi thành số nguyên
 */
console.log(parseInt('42')) // 42
console.log(parseInt('101', 2)) // 5 (nhị phân sang thập phân)

/**
 *  function parseFloat(string: string): number
 *  Chuyển đổi chuỗi thành số thực
 */
console.log(parseFloat('3.14')) // 3.14

/**
 *  NumberConstructor.isFinite(number: unknown): boolean
 *  Kiểm tra xem giá trị có phải là số hữu hạn không
 */
console.log(Number.isFinite(100)) // true
console.log(Number.isFinite(Infinity)) // false

/**
 *  NumberConstructor.isInteger(number: unknown): boolean
 *  Kiểm tra xem giá trị có phải là số nguyên không
 */
console.log(Number.isInteger(10)) // true
console.log(Number.isInteger(10.5)) // false

/**
 *  NumberConstructor.isNaN(number: unknown): boolean
 *  Kiểm tra xem giá trị có phải là NaN không
 */
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN('abc')) // false

/**
 *  NumberConstructor.isSafeInteger(number: unknown): boolean
 *  Kiểm tra xem giá trị có phải là số nguyên an toàn không
 */
console.log(Number.isSafeInteger(9007199254740991)) // true
console.log(Number.isSafeInteger(9007199254740992)) // false

/**
 *  Number.toFixed(fractionDigits?: number): string
 *  Chuyển số thành chuỗi với số chữ số thập phân cố định
 */
console.log((10.6789).toFixed(2)) // "10.68"

/**
 *  Number.toExponential(fractionDigits?: number): string
 *  Chuyển số thành chuỗi ở dạng số mũ
 */
console.log((12345.6789).toExponential(2)) // "1.23e+4"

/**
 *  Number.toPrecision(precision?: number): string
 *  Định dạng số với độ chính xác chỉ định
 */
console.log((123.456).toPrecision(4)) // "123.5"

/**
 *  Number.toString(radix?: number): string
 *  Chuyển số thành chuỗi theo hệ cơ số
 */
console.log((255).toString(16)) // "ff" (hệ 16)
console.log((10).toString(2)) // "1010" (hệ 2)

// * 2. Các phương thức của Math
// * Hàm số học
/**
 *  Math.abs(x: number): number
 *  Trị tuyệt đối
 */
console.log(Math.abs(-5)) // 5

/**
 *  Math.ceil(x: number): number
 *  Làm tròn lên
 */
console.log(Math.ceil(4.3)) // 5

/**
 *  Math.floor(x: number): number
 *  Làm tròn xuống
 */
console.log(Math.floor(4.8)) // 4

/**
 *  Math.round(x: number): number
 *  Làm tròn đến số nguyên gần nhất
 */
console.log(Math.round(4.5)) // 5

/**
 *  Math.trunc(x: number): number
 *  Loại bỏ phần thập phân, chỉ lấy phần nguyên
 */
console.log(Math.trunc(4.9)) // 4

// * Hàm mũ và căn
/**
 *  Math.pow(x: number, y: number): number
 *  Lũy thừa (x mũ y)
 */
console.log(Math.pow(2, 3)) // 8

/**
 *  Math.sqrt(x: number): number
 *  Căn bậc hai
 */
console.log(Math.sqrt(16)) // 4

/**
 *  Math.cbrt(x: number): number
 *  Căn bậc ba
 */
console.log(Math.cbrt(27)) // 3

/**
 *  Math.exp(x: number): number
 *  Lũy thừa cơ số e
 */
console.log(Math.exp(1)) // 2.718281828459045 (e^1)

/**
 *  Math.log(x: number): number
 *  Logarit cơ số e
 */
console.log(Math.log(10)) // 2.302585092994046 (ln 10)

/**
 *  Math.log2(x: number): number
 *  Logarit cơ số 2
 */
console.log(Math.log2(8)) // 3

/**
 *  Math.log10(x: number): number
 *  Logarit cơ số 10
 */
console.log(Math.log10(1000)) // 3

// * Hàm lượng giác
/**
 *  Math.sin(x: number): number
 *  Sin (radian)
 */
console.log(Math.sin(Math.PI / 2)) // 1

/**
 *  Math.sin(x: number): number
 *  Cos (radian)
 */
console.log(Math.cos(0)) // 1

/**
 *  Math.tan(x: number): number
 *  Tan (radian)
 */
console.log(Math.tan(Math.PI / 4)) // 1

/**
 *  Math.asin(x: number): number
 *  Arcsin (radian)
 */
console.log(Math.asin(1)) // 1.5707963267948966 (π/2)

/**
 *  Math.acos(x: number): number
 *  Arccos (radian)
 */
console.log(Math.acos(0)) // 1.5707963267948966 (π/2)

/**
 *  Math.atan(x: number): number
 *  Arctan (radian)
 */
console.log(Math.atan(1)) // 0.7853981633974483 (π/4)

/**
 *  Math.atan2(y: number, x: number): number
 *  Arctan(y/x), trả về góc giữa đường thẳng (x, y) và trục x
 */
console.log(Math.atan2(1, 1)) // 0.7853981633974483 (π/4)

// * Hàm ngẫu nhiên
/**
 *  Math.random(): number
 *  Trả về số ngẫu nhiên từ 0 đến < 1
 */
console.log(Math.random()) // Số ngẫu nhiên từ 0 đến <1
console.log(Math.floor(Math.random() * 10) + 1) // Số ngẫu nhiên từ 1 đến 10

// * Hàm giá trị lớn nhất, nhỏ nhất
/**
 *  Math.max(...values: number[]): number
 *  Tìm giá trị lớn nhất
 */
console.log(Math.max(1, 5, 10)) // 10

/**
 *  Math.min(...values: number[]): number
 *  Tìm giá trị nhỏ nhất
 */
console.log(Math.min(1, 5, 10)) // 1

// * 3. Làm việc với BigInt
/** 
 *  var BigInt: BigIntConstructor
    (value: bigint | boolean | number | string) => bigint
 *  Chuyển đổi giá trị thành BigInt
 */
console.log(BigInt(9007199254740991) + BigInt(1)) // 9007199254740992n

/**
 *  BigIntConstructor.asIntN(bits: number, int: bigint): bigint
 *  Giới hạn giá trị trong số nguyên bits bit có dấu
 */
console.log(BigInt.asIntN(8, 257)) // 1 (vì 257 = 256 + 1, 256 bị cắt do giới hạn 8 bit)

/**
 *  BigIntConstructor.asUintN(bits: number, int: bigint): bigint
 *  Giới hạn giá trị trong số nguyên bits bit không dấu
 */
console.log(BigInt.asUintN(8, 257)) // 1

// * 4. Xử lý số bằng cách khác
/**
 *  Chuyển chuỗi thành số (Number("123.45"))
 */
console.log(+'123.45') // 123.45

/**
 *  Ép kiểu về số nguyên (Math.trunc(x))
 */
console.log(~~4.9) // 4 (tương đương Math.trunc())

/**
 *  0`
 */
console.log(5.9 | 0) // 5 (bitwise OR)
console.log(-5.9 | 0) // -5

/**
 *  Chuyển số thành số nguyên không dấu
 */
console.log(3.9 >>> 0) // 3 (chuyển thành số nguyên không dấu)
