console.log(`Welcome back captain`);

//For loops

for (let i = 0; i < 10; i++) {
    console.log(`check variable i = `, i)
}

console.log(`Value of i = `, i);

// lưu ý  khi khai báo biến let  i trong For thì chỉ có thể được sử dụng trong For
// nếu muốn sài i thì phải khai báo ở ngoài



for (var i = 0; i < 10; i++) {
    console.log(`check variable i = `, i)
}

console.log(`Value of i = `, i);

// lưu ý khi khai báo biến var i trong FOR thì nó có thể được sủ dụng ngoài vòng FOR

// Lưu ý i++ <=> i = i + 1
// i++ khác ++i là gì 
// i++ là gắn giá trị cho i xong rồi tăng giá trị cho biến i 
// còn ++i là tăng giá trị cho biến i xong mới gắn giá trị của i