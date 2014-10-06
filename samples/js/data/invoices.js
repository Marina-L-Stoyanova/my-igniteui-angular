﻿app.factory('invoices', [function () {
    var svc = {
        data: [{
            "Index": 0,
            "Open": 1000,
            "High": 1026,
            "Low": 977,
            "Close": 1014,
            "Volume": 1995.25,
            "Date": "\/Date(1262383200000)\/",
            "DateString": "1/2/2010",
            "Category": null,
            "Change": 14,
            "ChangePerCent": 1.4000000000000001
        }, {
            "Index": 1,
            "Open": 1014,
            "High": 1033.5,
            "Low": 984.75,
            "Close": 989,
            "Volume": 2003,
            "Date": "\/Date(1262469600000)\/",
            "DateString": "1/3/2010",
            "Category": null,
            "Change": -25,
            "ChangePerCent": -2.4654832347140041
        }, {
            "Index": 2,
            "Open": 989,
            "High": 1004,
            "Low": 960.5,
            "Close": 1000,
            "Volume": 1993,
            "Date": "\/Date(1262556000000)\/",
            "DateString": "1/4/2010",
            "Category": null,
            "Change": 11,
            "ChangePerCent": 1.1122345803842264
        }, {
            "Index": 3,
            "Open": 1000,
            "High": 1020.25,
            "Low": 980.75,
            "Close": 995,
            "Volume": 1982.25,
            "Date": "\/Date(1262642400000)\/",
            "DateString": "1/5/2010",
            "Category": null,
            "Change": -5,
            "ChangePerCent": -0.5
        }, {
            "Index": 4,
            "Open": 995,
            "High": 1030.5,
            "Low": 964,
            "Close": 1015,
            "Volume": 1971,
            "Date": "\/Date(1262728800000)\/",
            "DateString": "1/6/2010",
            "Category": null,
            "Change": 20,
            "ChangePerCent": 2.0100502512562812
        }, {
            "Index": 5,
            "Open": 1015,
            "High": 1026.5,
            "Low": 998.75,
            "Close": 1009,
            "Volume": 1982.5,
            "Date": "\/Date(1262815200000)\/",
            "DateString": "1/7/2010",
            "Category": null,
            "Change": -6,
            "ChangePerCent": -0.59113300492610843
        }, {
            "Index": 6,
            "Open": 1009,
            "High": 1039,
            "Low": 984.5,
            "Close": 1033,
            "Volume": 1969.25,
            "Date": "\/Date(1262901600000)\/",
            "DateString": "1/8/2010",
            "Category": null,
            "Change": 24,
            "ChangePerCent": 2.3785926660059467
        }, {
            "Index": 7,
            "Open": 1033,
            "High": 1064.25,
            "Low": 1005.75,
            "Close": 1035,
            "Volume": 1966.25,
            "Date": "\/Date(1262988000000)\/",
            "DateString": "1/9/2010",
            "Category": null,
            "Change": 2,
            "ChangePerCent": 0.1936108422071636
        }, {
            "Index": 8,
            "Open": 1035,
            "High": 1059.25,
            "Low": 1021.5,
            "Close": 1026,
            "Volume": 1951,
            "Date": "\/Date(1263074400000)\/",
            "DateString": "1/10/2010",
            "Category": null,
            "Change": -9,
            "ChangePerCent": -0.86956521739130432
        }, {
            "Index": 9,
            "Open": 1026,
            "High": 1047,
            "Low": 1001,
            "Close": 1017,
            "Volume": 1941.25,
            "Date": "\/Date(1263160800000)\/",
            "DateString": "1/11/2010",
            "Category": null,
            "Change": -9,
            "ChangePerCent": -0.8771929824561403
        }, {
            "Index": 10,
            "Open": 1017,
            "High": 1044,
            "Low": 982.75,
            "Close": 1012,
            "Volume": 1932.25,
            "Date": "\/Date(1263247200000)\/",
            "DateString": "1/12/2010",
            "Category": null,
            "Change": -5,
            "ChangePerCent": -0.49164208456243852
        }, {
            "Index": 11,
            "Open": 1012,
            "High": 1019.75,
            "Low": 989.75,
            "Close": 993,
            "Volume": 1909.75,
            "Date": "\/Date(1263333600000)\/",
            "DateString": "1/13/2010",
            "Category": null,
            "Change": -19,
            "ChangePerCent": -1.8774703557312251
        }, {
            "Index": 12,
            "Open": 993,
            "High": 1021.25,
            "Low": 966.25,
            "Close": 1019,
            "Volume": 1908.5,
            "Date": "\/Date(1263420000000)\/",
            "DateString": "1/14/2010",
            "Category": null,
            "Change": 26,
            "ChangePerCent": 2.6183282980866065
        }, {
            "Index": 13,
            "Open": 1019,
            "High": 1034,
            "Low": 1002,
            "Close": 1024,
            "Volume": 1893.25,
            "Date": "\/Date(1263506400000)\/",
            "DateString": "1/15/2010",
            "Category": null,
            "Change": 5,
            "ChangePerCent": 0.49067713444553485
        }, {
            "Index": 14,
            "Open": 1024,
            "High": 1047.75,
            "Low": 1001.5,
            "Close": 1029,
            "Volume": 1893.5,
            "Date": "\/Date(1263592800000)\/",
            "DateString": "1/16/2010",
            "Category": null,
            "Change": 5,
            "ChangePerCent": 0.48828125
        }, {
            "Index": 15,
            "Open": 1029,
            "High": 1050.75,
            "Low": 1012.5,
            "Close": 1035,
            "Volume": 1920,
            "Date": "\/Date(1263679200000)\/",
            "DateString": "1/17/2010",
            "Category": null,
            "Change": 6,
            "ChangePerCent": 0.58309037900874638
        }, {
            "Index": 16,
            "Open": 1035,
            "High": 1065.75,
            "Low": 1011,
            "Close": 1019,
            "Volume": 1896.5,
            "Date": "\/Date(1263765600000)\/",
            "DateString": "1/18/2010",
            "Category": null,
            "Change": -16,
            "ChangePerCent": -1.5458937198067633
        }, {
            "Index": 17,
            "Open": 1019,
            "High": 1055.75,
            "Low": 993.25,
            "Close": 1041,
            "Volume": 1916.25,
            "Date": "\/Date(1263852000000)\/",
            "DateString": "1/19/2010",
            "Category": null,
            "Change": 22,
            "ChangePerCent": 2.1589793915603535
        }, {
            "Index": 18,
            "Open": 1041,
            "High": 1058.75,
            "Low": 1017.75,
            "Close": 1043,
            "Volume": 1919.25,
            "Date": "\/Date(1263938400000)\/",
            "DateString": "1/20/2010",
            "Category": null,
            "Change": 2,
            "ChangePerCent": 0.19212295869356388
        }, {
            "Index": 19,
            "Open": 1043,
            "High": 1060.25,
            "Low": 998.75,
            "Close": 1045,
            "Volume": 1902.75,
            "Date": "\/Date(1264024800000)\/",
            "DateString": "1/21/2010",
            "Category": null,
            "Change": 2,
            "ChangePerCent": 0.19175455417066153
        }, {
            "Index": 20,
            "Open": 1045,
            "High": 1080.75,
            "Low": 1026.5,
            "Close": 1029,
            "Volume": 1892.75,
            "Date": "\/Date(1264111200000)\/",
            "DateString": "1/22/2010",
            "Category": null,
            "Change": -16,
            "ChangePerCent": -1.5311004784688995
        }, {
            "Index": 21,
            "Open": 1029,
            "High": 1051.25,
            "Low": 1009.25,
            "Close": 1051,
            "Volume": 1878.75,
            "Date": "\/Date(1264197600000)\/",
            "DateString": "1/23/2010",
            "Category": null,
            "Change": 22,
            "ChangePerCent": 2.1379980563654035
        }, {
            "Index": 22,
            "Open": 1051,
            "High": 1076.5,
            "Low": 1018.25,
            "Close": 1064,
            "Volume": 1883.25,
            "Date": "\/Date(1264284000000)\/",
            "DateString": "1/24/2010",
            "Category": null,
            "Change": 13,
            "ChangePerCent": 1.2369172216936251
        }, {
            "Index": 23,
            "Open": 1064,
            "High": 1074.25,
            "Low": 1035.5,
            "Close": 1048,
            "Volume": 1862.5,
            "Date": "\/Date(1264370400000)\/",
            "DateString": "1/25/2010",
            "Category": null,
            "Change": -16,
            "ChangePerCent": -1.5037593984962405
        }, {
            "Index": 24,
            "Open": 1048,
            "High": 1081.5,
            "Low": 1022.5,
            "Close": 1037,
            "Volume": 1851.75,
            "Date": "\/Date(1264456800000)\/",
            "DateString": "1/26/2010",
            "Category": null,
            "Change": -11,
            "ChangePerCent": -1.0496183206106871
        }, {
            "Index": 25,
            "Open": 1037,
            "High": 1042.5,
            "Low": 1016.75,
            "Close": 1038,
            "Volume": 1856,
            "Date": "\/Date(1264543200000)\/",
            "DateString": "1/27/2010",
            "Category": null,
            "Change": 1,
            "ChangePerCent": 0.09643201542912247
        }, {
            "Index": 26,
            "Open": 1038,
            "High": 1059.25,
            "Low": 996.75,
            "Close": 1015,
            "Volume": 1850.75,
            "Date": "\/Date(1264629600000)\/",
            "DateString": "1/28/2010",
            "Category": null,
            "Change": -23,
            "ChangePerCent": -2.2157996146435455
        }, {
            "Index": 27,
            "Open": 1015,
            "High": 1032,
            "Low": 988.5,
            "Close": 1027,
            "Volume": 1850,
            "Date": "\/Date(1264716000000)\/",
            "DateString": "1/29/2010",
            "Category": null,
            "Change": 12,
            "ChangePerCent": 1.1822660098522169
        }, {
            "Index": 28,
            "Open": 1027,
            "High": 1043,
            "Low": 1002,
            "Close": 1012,
            "Volume": 1842.75,
            "Date": "\/Date(1264802400000)\/",
            "DateString": "1/30/2010",
            "Category": null,
            "Change": -15,
            "ChangePerCent": -1.4605647517039921
        }, {
            "Index": 29,
            "Open": 1012,
            "High": 1048,
            "Low": 974.5,
            "Close": 974,
            "Volume": 1838.25,
            "Date": "\/Date(1264888800000)\/",
            "DateString": "1/31/2010",
            "Category": null,
            "Change": -38,
            "ChangePerCent": -3.7549407114624502
        }, {
            "Index": 30,
            "Open": 974,
            "High": 995.25,
            "Low": 962,
            "Close": 985,
            "Volume": 1810.25,
            "Date": "\/Date(1264975200000)\/",
            "DateString": "2/1/2010",
            "Category": null,
            "Change": 11,
            "ChangePerCent": 1.1293634496919918
        }, {
            "Index": 31,
            "Open": 985,
            "High": 1027.5,
            "Low": 953.25,
            "Close": 974,
            "Volume": 1839,
            "Date": "\/Date(1265061600000)\/",
            "DateString": "2/2/2010",
            "Category": null,
            "Change": -11,
            "ChangePerCent": -1.116751269035533
        }, {
            "Index": 32,
            "Open": 974,
            "High": 1009,
            "Low": 934,
            "Close": 998,
            "Volume": 1822.75,
            "Date": "\/Date(1265148000000)\/",
            "DateString": "2/3/2010",
            "Category": null,
            "Change": 24,
            "ChangePerCent": 2.4640657084188913
        }, {
            "Index": 33,
            "Open": 998,
            "High": 1003,
            "Low": 975.75,
            "Close": 980,
            "Volume": 1817.5,
            "Date": "\/Date(1265234400000)\/",
            "DateString": "2/4/2010",
            "Category": null,
            "Change": -18,
            "ChangePerCent": -1.8036072144288577
        }, {
            "Index": 34,
            "Open": 980,
            "High": 1013,
            "Low": 942.25,
            "Close": 944,
            "Volume": 1826,
            "Date": "\/Date(1265320800000)\/",
            "DateString": "2/5/2010",
            "Category": null,
            "Change": -36,
            "ChangePerCent": -3.6734693877551026
        }, {
            "Index": 35,
            "Open": 944,
            "High": 979.25,
            "Low": 920.5,
            "Close": 928,
            "Volume": 1801.5,
            "Date": "\/Date(1265407200000)\/",
            "DateString": "2/6/2010",
            "Category": null,
            "Change": -16,
            "ChangePerCent": -1.6949152542372881
        }, {
            "Index": 36,
            "Open": 928,
            "High": 946,
            "Low": 898,
            "Close": 912,
            "Volume": 1835,
            "Date": "\/Date(1265493600000)\/",
            "DateString": "2/7/2010",
            "Category": null,
            "Change": -16,
            "ChangePerCent": -1.7241379310344827
        }, {
            "Index": 37,
            "Open": 912,
            "High": 919.25,
            "Low": 887.5,
            "Close": 906,
            "Volume": 1831.75,
            "Date": "\/Date(1265580000000)\/",
            "DateString": "2/8/2010",
            "Category": null,
            "Change": -6,
            "ChangePerCent": -0.6578947368421052
        }, {
            "Index": 38,
            "Open": 906,
            "High": 921.75,
            "Low": 886.5,
            "Close": 887,
            "Volume": 1838.5,
            "Date": "\/Date(1265666400000)\/",
            "DateString": "2/9/2010",
            "Category": null,
            "Change": -19,
            "ChangePerCent": -2.0971302428256071
        }, {
            "Index": 39,
            "Open": 887,
            "High": 923.5,
            "Low": 860.75,
            "Close": 896,
            "Volume": 1806,
            "Date": "\/Date(1265752800000)\/",
            "DateString": "2/10/2010",
            "Category": null,
            "Change": 9,
            "ChangePerCent": 1.0146561443066515
        }, {
            "Index": 40,
            "Open": 896,
            "High": 914,
            "Low": 870,
            "Close": 875,
            "Volume": 1817.75,
            "Date": "\/Date(1265839200000)\/",
            "DateString": "2/11/2010",
            "Category": null,
            "Change": -21,
            "ChangePerCent": -2.34375
        }, {
            "Index": 41,
            "Open": 875,
            "High": 903.5,
            "Low": 854,
            "Close": 871,
            "Volume": 1816,
            "Date": "\/Date(1265925600000)\/",
            "DateString": "2/12/2010",
            "Category": null,
            "Change": -4,
            "ChangePerCent": -0.45714285714285718
        }, {
            "Index": 42,
            "Open": 871,
            "High": 892.75,
            "Low": 855.75,
            "Close": 866,
            "Volume": 1799.75,
            "Date": "\/Date(1266012000000)\/",
            "DateString": "2/13/2010",
            "Category": null,
            "Change": -5,
            "ChangePerCent": -0.57405281285878307
        }, {
            "Index": 43,
            "Open": 866,
            "High": 902.25,
            "Low": 824.75,
            "Close": 894,
            "Volume": 1781.5,
            "Date": "\/Date(1266098400000)\/",
            "DateString": "2/14/2010",
            "Category": null,
            "Change": 28,
            "ChangePerCent": 3.2332563510392611
        }, {
            "Index": 44,
            "Open": 894,
            "High": 919.25,
            "Low": 870.25,
            "Close": 870,
            "Volume": 1795.5,
            "Date": "\/Date(1266184800000)\/",
            "DateString": "2/15/2010",
            "Category": null,
            "Change": -24,
            "ChangePerCent": -2.6845637583892619
        }, {
            "Index": 45,
            "Open": 870,
            "High": 891.75,
            "Low": 845.5,
            "Close": 849,
            "Volume": 1823.5,
            "Date": "\/Date(1266271200000)\/",
            "DateString": "2/16/2010",
            "Category": null,
            "Change": -21,
            "ChangePerCent": -2.4137931034482758
        }, {
            "Index": 46,
            "Open": 849,
            "High": 874,
            "Low": 832.5,
            "Close": 859,
            "Volume": 1853.5,
            "Date": "\/Date(1266357600000)\/",
            "DateString": "2/17/2010",
            "Category": null,
            "Change": 10,
            "ChangePerCent": 1.1778563015312131
        }, {
            "Index": 47,
            "Open": 859,
            "High": 886.75,
            "Low": 829,
            "Close": 871,
            "Volume": 1847.25,
            "Date": "\/Date(1266444000000)\/",
            "DateString": "2/18/2010",
            "Category": null,
            "Change": 12,
            "ChangePerCent": 1.3969732246798603
        }, {
            "Index": 48,
            "Open": 871,
            "High": 892.25,
            "Low": 841.25,
            "Close": 864,
            "Volume": 1858,
            "Date": "\/Date(1266530400000)\/",
            "DateString": "2/19/2010",
            "Category": null,
            "Change": -7,
            "ChangePerCent": -0.80367393800229625
        }, {
            "Index": 49,
            "Open": 864,
            "High": 886.75,
            "Low": 830.25,
            "Close": 843,
            "Volume": 1866,
            "Date": "\/Date(1266616800000)\/",
            "DateString": "2/20/2010",
            "Category": null,
            "Change": -21,
            "ChangePerCent": -2.4305555555555558
        }
        ]
    };
    return svc;
}
]);
