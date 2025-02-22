"use strict";
!(function () {
    let e,
        o,
        t,
        r,
        s,
        i,
        a = config.colors_label.primary;
    var n = {
            donut: {
                series1: config.colors.primary,
                series2: "#9055fdb3",
                series3: "#9055fd80",
            },
        },
        l =
            ((i = (
                isDarkStyle
                    ? ((e = config.colors_dark.cardColor),
                      (o = config.colors_dark.textMuted),
                      (t = config.colors_dark.headingColor),
                      (r = config.colors_dark.borderColor),
                      (s = config.colors_dark.chartBgColor),
                      config.colors_dark)
                    : ((e = config.colors.cardColor),
                      (o = config.colors.textMuted),
                      (t = config.colors.headingColor),
                      (r = config.colors.borderColor),
                      (s = config.colors.chartBgColor),
                      config.colors)
            ).bodyColor),
            document.querySelector("#totalSalesChart")),
        c = {
            chart: {
                type: "line",
                height: 230,
                parentHeightOffset: 0,
                toolbar: {
                    show: !1,
                },
            },
            series: [
                {
                    data: [0, 90, 10, 80, 50, 130],
                },
            ],
            tooltip: {
                enabled: !1,
            },
            stroke: {
                curve: "smooth",
                width: 5,
                lineCap: "round",
            },
            legend: {
                show: !1,
            },
            grid: {
                show: !1,
                padding: {
                    bottom: -15,
                },
            },
            colors: [config.colors.success],
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    gradientToColors: [e],
                    shadeIntensity: 1,
                    inverseColors: !1,
                    type: "horizontal",
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100],
                },
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                labels: {
                    style: {
                        colors: i,
                        fontFamily: "Inter",
                        fontSize: "0.937rem",
                        fontWeight: 400,
                    },
                },
                axisBorder: {
                    show: !1,
                },
                axisTicks: {
                    show: !1,
                },
            },
            yaxis: {
                show: !1,
            },
        },
        l =
            (null !== l && new ApexCharts(l, c).render(),
            document.querySelector("#revenueReportChart")),
        c = {
            series: [
                {
                    name: "Earning",
                    data: [7, 10, 18, 16, 7, 3, 10, 14, 4],
                },
                {
                    name: "Expense",
                    data: [-9, -5, -3, -12, -8, -3, -5, -5, -8],
                },
            ],
            chart: {
                height: 240,
                parentHeightOffset: 0,
                stacked: !0,
                type: "bar",
                toolbar: {
                    show: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            legend: {
                show: !0,
                position: "bottom",
                offsetY: 10,
                markers: {
                    width: 10,
                    height: 10,
                    radius: 12,
                    offsetX: -3,
                },
                itemMargin: {
                    horizontal: 15,
                    vertical: 5,
                },
                fontSize: "15px",
                fontFamily: "Inter",
                fontWeight: 400,
                labels: {
                    colors: i,
                    useSeriesColors: !1,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: !1,
                    columnWidth: "30%",
                    borderRadius: 5,
                    startingShape: "rounded",
                    endingShape: "rounded",
                },
            },
            colors: [config.colors.success, config.colors.secondary],
            dataLabels: {
                enabled: !1,
            },
            grid: {
                show: !1,
                padding: {
                    top: -20,
                    left: -10,
                },
            },
            xaxis: {
                labels: {
                    show: !1,
                },
                axisTicks: {
                    show: !1,
                },
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                labels: {
                    show: !1,
                },
            },
            responsive: [
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 280,
                        },
                        plotOptions: {
                            bar: {
                                columnWidth: "20%",
                            },
                        },
                    },
                },
                {
                    breakpoint: 783,
                    options: {
                        chart: {
                            height: 250,
                        },
                    },
                },
                {
                    breakpoint: 768,
                    options: {
                        plotOptions: {
                            bar: {
                                columnWidth: "20%",
                            },
                        },
                    },
                },
                {
                    breakpoint: 520,
                    options: {
                        chart: {
                            height: 200,
                        },
                    },
                },
            ],
            states: {
                hover: {
                    filter: {
                        type: "none",
                    },
                },
                active: {
                    filter: {
                        type: "none",
                    },
                },
            },
        },
        l =
            (null !== l && new ApexCharts(l, c).render(),
            document.querySelector("#salesOverviewChart")),
        c = {
            chart: {
                height: 250,
                parentHeightOffset: 0,
                type: "donut",
            },
            labels: ["Apparel", "Electronics", "FMCG", "Other Sales"],
            series: [12, 25, 13, 50],
            colors: [n.donut.series1, n.donut.series2, n.donut.series3, s],
            stroke: {
                width: 0,
            },
            dataLabels: {
                enabled: !1,
            },
            legend: {
                show: !1,
            },
            tooltip: {
                style: {
                    color: config.colors.white,
                },
            },
            grid: {
                padding: {
                    top: 15,
                },
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "70%",
                        labels: {
                            show: !0,
                            value: {
                                fontSize: "24px",
                                fontFamily: "Inter",
                                color: t,
                                fontWeight: 500,
                                offsetY: -20,
                                formatter: function (e) {
                                    return parseInt(e) + "k";
                                },
                            },
                            name: {
                                offsetY: 20,
                                fontFamily: "Inter",
                                color: i,
                            },
                            total: {
                                show: !0,
                                fontSize: "15px",
                                fontFamily: "Inter",
                                label: "Weekly Vsits",
                                color: i,
                                formatter: function (e) {
                                    return "102k";
                                },
                            },
                        },
                    },
                },
            },
            responsive: [
                {
                    breakpoint: 1399,
                    options: {
                        chart: {
                            height: 200,
                        },
                    },
                },
                {
                    breakpoint: 420,
                    options: {
                        chart: {
                            height: 300,
                        },
                    },
                },
            ],
        },
        n =
            (null !== l && new ApexCharts(l, c).render(),
            document.querySelector("#weeklySalesChart")),
        l = {
            chart: {
                height: 250,
                type: "bar",
                parentHeightOffset: 0,
                toolbar: {
                    show: !1,
                },
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    distributed: !0,
                    columnWidth: "60%",
                    endingShape: "rounded",
                    startingShape: "rounded",
                },
            },
            series: [
                {
                    data: [38, 55, 48, 65, 80, 38, 48],
                },
            ],
            tooltip: {
                enabled: !1,
            },
            legend: {
                show: !1,
            },
            dataLabels: {
                enabled: !1,
            },
            colors: [a, a, a, a, config.colors.primary, a, a],
            grid: {
                show: !1,
                padding: {
                    top: -15,
                    left: -7,
                    right: -4,
                },
            },
            states: {
                hover: {
                    filter: {
                        type: "none",
                    },
                },
                active: {
                    filter: {
                        type: "none",
                    },
                },
            },
            xaxis: {
                axisTicks: {
                    show: !1,
                },
                axisBorder: {
                    show: !1,
                },
                categories: ["S", "M", "T", "W", "T", "F", "S"],
                labels: {
                    style: {
                        colors: i,
                        fontFamily: "Inter",
                    },
                },
            },
            yaxis: {
                show: !1,
            },
            responsive: [
                {
                    breakpoint: 1025,
                    options: {
                        chart: {
                            height: 210,
                        },
                    },
                },
            ],
        },
        c =
            (null !== n && new ApexCharts(n, l).render(),
            document.querySelector("#totalGrowthAreaChart")),
        n = {
            chart: {
                height: 100,
                type: "area",
                parentHeightOffset: 0,
                toolbar: {
                    show: !1,
                },
            },
            grid: {
                show: !1,
                xaxis: {
                    lines: {
                        show: !1,
                    },
                },
                yaxis: {
                    lines: {
                        show: !1,
                    },
                },
                padding: {
                    top: -15,
                    left: -7,
                    right: 9,
                    bottom: -15,
                },
            },
            colors: [config.colors.success],
            dataLabels: {
                enabled: !1,
            },
            stroke: {
                width: 3,
                curve: "smooth",
            },
            series: [
                {
                    data: [10, 25, 20, 40, 24, 50, 42],
                },
            ],
            tooltip: {
                shared: !1,
                intersect: !0,
                x: {
                    show: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            xaxis: {
                labels: {
                    show: !1,
                },
                axisTicks: {
                    show: !1,
                },
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                labels: {
                    show: !1,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityTo: 0.7,
                    opacityFrom: 0.5,
                    shadeIntensity: 1,
                    stops: [0, 90, 100],
                    colorStops: [
                        [
                            {
                                offset: 0,
                                opacity: 0.6,
                                color: config.colors.success,
                            },
                            {
                                offset: 100,
                                opacity: 0.1,
                                color: e,
                            },
                        ],
                    ],
                },
            },
            responsive: [
                {
                    breakpoint: 1350,
                    options: {
                        chart: {
                            height: 80,
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 170,
                        },
                    },
                },
                {
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 100,
                        },
                    },
                },
                {
                    breakpoint: 768,
                    options: {
                        chart: {
                            height: 110,
                        },
                    },
                },
            ],
        },
        l =
            (null !== c && new ApexCharts(c, n).render(),
            document.querySelector(".credit-card-payment")),
        c = document.querySelector(".expiry-date-payment"),
        n = document.querySelectorAll(".cvv-code-payment");
    l &&
        new Cleave(l, {
            creditCard: !0,
            onCreditCardTypeChanged: function (e) {
                document.querySelector(".card-payment-type").innerHTML =
                    "" != e && "unknown" != e
                        ? '<img src="' +
                          assetsPath +
                          "img/icons/payments/" +
                          e +
                          '-cc.png" class="cc-icon-image" height="28"/>'
                        : "";
            },
        }),
        c &&
            new Cleave(c, {
                date: !0,
                delimiter: "/",
                datePattern: ["m", "y"],
            }),
        n &&
            n.forEach(function (e) {
                new Cleave(e, {
                    numeral: !0,
                    numeralPositiveOnly: !0,
                });
            });
})();
