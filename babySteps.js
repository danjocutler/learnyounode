    var result = 0

    for (var i = 2; i < process.argv.length; i++)
      result += Number(process.argv[i])

    console.log(result)

    // console.log(+process.argv[2] + +process.argv[3] + +process.argv[4])