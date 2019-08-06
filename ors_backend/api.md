## /predict POST
- request: csv file
- response: json(`[]`)

``` json
[
    {
        "id": "1",
        "name": "张三",
        "gender": "男",
        "age": "70",
        "department": "心血管科",
        "operatingName": "心脏搭桥手术",
        "doctorName": "李四",
        "predTime": "120",
        "orId": "",
        "startTime": ""
    }, {
        "id": "2",
        "name": "王二",
        "gender": "女",
        "age": "23",
        "department": "妇产科",
        "operatingName": "剖腹产手术",
        "doctorName": "王小二",
        "predTime": "100",
        "orId": "5",
        "startTime": "15:00"
    }
]
```

## /schedule POST
- request: 
``` json
[
    {
        "id": "1",
        "name": "张三",
        "gender": "男",
        "age": "70",
        "department": "心血管科",
        "operatingName": "心脏搭桥手术",
        "anaesthetic": "全身麻醉",
        "doctorName": "李四",
        "predTime": "120",
        "orId": "",
        "startTime": ""
    }, {
        "id": "2",
        "name": "王二",
        "gender": "女",
        "age": "23",
        "department": "妇产科",
        "operatingName": "剖腹产手术",
        "anaesthetic": "全身麻醉",
        "doctorName": "王小二",
        "predTime": "100",
        "orId": "",
        "startTime": "15:00"
    }
]
```

- response: 
``` json
[
    [
        {
            "roomInfo":"", 
            "operation":[
                {
                    "patientName": "张三",
                    "secondInfo": "张三 8:30~9:30 李医生",
                    "thirdInfo": "张三 8:30~9:30 李医生 三级信息",
                    "beginIndex": 0,
                    "operationDuration": 10,
                    "recoverDuration": 1,
                    "cleanDuration": 2
                },
                {
                    "patientName": "李四",
                    "secondInfo": "李四 8:30~9:30 李医生",
                    "thirdInfo": "李四 8:30~9:30 李医生 三级信息",
                    "beginIndex": 18,
                    "timeDuration": 5,
                    "recoverDuration": 1,
                    "cleanDuration": 2
                }
            ]
        },
        {
            "roomInfo":"", 
            "operation": [
                {
                    "patientName": "王五",
                    "secondInfo": "王五 8:30~9:30 李医生",
                    "thirdInfo": "王五 8:30~9:30 李医生 三级信息",
                    "beginIndex": 9,
                    "timeDuration": 20,
                    "recoverDuration": 1,
                    "cleanDuration": 2
                }
            ]
        }
    ],

    [
        [
            {
                "id": "1",
                "name": "张三",
                "gender": "男",
                "age": "70",
                "department": "心血管科",
                "operatingName": "心脏搭桥手术",
                "anaesthetic": "全身麻醉",
                "doctorName": "李四",
                "predTime": "120",
                "orId": "",
                "startTime": "",
                "recoverDuration": 1,
                "cleanDuration": 2
            }, {
                "id": "2",
                "name": "王二",
                "gender": "女",
                "age": "23",
                "department": "妇产科",
                "operatingName": "剖腹产手术",
                "anaesthetic": "全身麻醉",
                "doctorName": "王小二",
                "predTime": "100",
                "orId": "5",
                "startTime": "15:00",
                "recoverDuration": 1,
                "cleanDuration": 2
            }
        ]
    ]
]
```



## /preview POST
- request: 
``` json
[
    {
        "id": "1",
        "name": "张三",
        "gender": "男",
        "age": "70",
        "department": "心血管科",
        "operatingName": "心脏搭桥手术",
        "anaesthetic": "全身麻醉",
        "doctorName": "李四",
        "predTime": "120",
        "orId": "",
        "startTime": "",
        "recoverDuration": 1,
        "cleanDuration": 2
    }, {
        "id": "2",
        "name": "王二",
        "gender": "女",
        "age": "23",
        "department": "妇产科",
        "operatingName": "剖腹产手术",
        "anaesthetic": "全身麻醉",
        "doctorName": "王小二",
        "predTime": "100",
        "orId": "",
        "startTime": "15:00",
        "recoverDuration": 1,
        "cleanDuration": 2
    }
]
```
- response: file

