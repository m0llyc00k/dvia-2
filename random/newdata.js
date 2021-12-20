let data = [{
        "postalCode": 10025,
        "count": 4544
    },
    {
        "postalCode": 10027,
        "count": 2715
    },
    {
        "postalCode": 10026,
        "count": 2470
    },
    {
        "postalCode": 10031,
        "count": 2426
    },
    {
        "postalCode": 10024,
        "count": 2401
    },
    {
        "postalCode": 10002,
        "count": 2061
    },
    {
        "postalCode": 10029,
        "count": 2013
    },
    {
        "postalCode": 10009,
        "count": 1907
    },
    {
        "postalCode": 10128,
        "count": 1787
    },
    {
        "postalCode": 10032,
        "count": 1747
    },
    {
        "postalCode": 10033,
        "count": 1485
    },
    {
        "postalCode": 10030,
        "count": 1471
    },
    {
        "postalCode": 10035,
        "count": 1402
    },
    {
        "postalCode": 10023,
        "count": 1384
    },
    {
        "postalCode": 10034,
        "count": 1332
    },
    {
        "postalCode": 10028,
        "count": 1189
    },
    {
        "postalCode": 10013,
        "count": 1103
    },
    {
        "postalCode": 10003,
        "count": 1103
    },
    {
        "postalCode": 10011,
        "count": 1092
    },
    {
        "postalCode": 10014,
        "count": 1077
    },
    {
        "postalCode": 10040,
        "count": 940
    },
    {
        "postalCode": 10012,
        "count": 821
    },
    {
        "postalCode": 10036,
        "count": 782
    },
    {
        "postalCode": 10016,
        "count": 738
    },
    {
        "postalCode": 10019,
        "count": 720
    },
    {
        "postalCode": 10001,
        "count": 680
    },
    {
        "postalCode": 10039,
        "count": 661
    },
    {
        "postalCode": 10037,
        "count": 657
    },
    {
        "postalCode": 10075,
        "count": 612
    },
    {
        "postalCode": 10021,
        "count": 566
    },
    {
        "postalCode": 10038,
        "count": 510
    },
    {
        "postalCode": 10022,
        "count": 504
    },
    {
        "postalCode": 10010,
        "count": 464
    },
    {
        "postalCode": 10065,
        "count": 383
    },
    {
        "postalCode": 10007,
        "count": 346
    },
    {
        "postalCode": 10018,
        "count": 222
    },
    {
        "postalCode": 10006,
        "count": 140
    },
    {
        "postalCode": 10017,
        "count": 126
    },
    {
        "postalCode": 10004,
        "count": 73
    },
    {
        "postalCode": 10005,
        "count": 56
    },
    {
        "postalCode": 10069,
        "count": 42
    },
    {
        "postalCode": 10280,
        "count": 33
    },
    {
        "postalCode": 10282,
        "count": 31
    },
    {
        "postalCode": 10463,
        "count": 21
    },
    {
        "postalCode": 10162,
        "count": 16
    },
    {
        "postalCode": 10044,
        "count": 14
    },
    {
        "postalCode": 10000,
        "count": 6
    },
    {
        "postalCode": 10020,
        "count": 4
    },
    {
        "postalCode": 10112,
        "count": 2
    },
    {
        "postalCode": 12345,
        "count": 2
    },
    {
        "postalCode": 11217,
        "count": 1
    },
    {
        "postalCode": 10120,
        "count": 1
    },
    {
        "postalCode": 10119,
        "count": 1
    },
    {
        "postalCode": 10121,
        "count": 1
    },
    {
        "postalCode": 10041,
        "count": 1
    },
    {
        "postalCode": 10048,
        "count": 1
    },
    {
        "postalCode": 10118,
        "count": 1
    },
    {
        "postalCode": 10151,
        "count": 1
    },
    {
        "postalCode": 11249,
        "count": 1
    },
    {
        "postalCode": 100354,
        "count": 1
    },
    {
        "postalCode": 10174,
        "count": 1
    },
    {
        "postalCode": 10271,
        "count": 1
    },
    {
        "postalCode": 10111,
        "count": 1
    }
]

var newData = [];

for (var i = 0; i < data.length; i++) {

    var newFormat = {
            postalCode: data[i].postalCode
             {
                count: data[i].count
            }}


    newData.push(newFormat)

}

console.log(newData)
