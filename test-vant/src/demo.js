// async 和 await 为了减少 Promise 的 代码量

async function getData() {
  // 注意 await 后面一定要跟着一个Promise异步操作
  const data1 = await getFileByPath('./file/1.txt')
  const data2 = await getFileByPath('./file/2.txt')
  const data3 = await getFileByPath('./file/3.txt')
  console.log(data1)
  console.log(data2)
  console.log(data3)
}

getData()