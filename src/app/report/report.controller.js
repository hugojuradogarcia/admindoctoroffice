
'use strict';

angular 
    .module( 'doctorOffice' )
    .controller( 'ReportController', ReportController );

function ReportController( $scope ){

    $scope.objectDate = [{
        count: 9,
        amount: 32000,
        name: "01-01-2017"
    },{
        count: 5,
        amount: 9000,
        name: "02-01-2017"
    },{
        count: 15,
        amount: 70000,
        name: "03-01-2017"
    },{
        count: 3,
        amount: 4000,
        name: "04-01-2017"
    },{
        count: 10,
        amount: 55000,
        name: "05-01-2017"
    },{
        count: 16,
        amount: 91500,
        name: "06-01-2017"
    },{
        count: 12,
        amount: 54000,
        name: "07-01-2017"
    }];
    
    $scope.serviceCount = [{ 
        count: 6,
        name: "Cardiología"
    },{ 
        count: 12,
        name: "Reumatología"
    },{ 
        count: 12,
        name: "Homeopatía"
    },{ 
        count: 12,
        name: "Radiología e Imagen"
    }];

    $scope.chartDateConsultation = {
        options: {
            chart:{
                //type: 'areaspline',
                type: 'column',
                reflow: true,
                zoomType: 'x'
            },
            plotOptions: {
                spline: {
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 3
                        }
                    }
                },
                areaspline: {
                    fillOpacity: 0.5
                },
                series: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true
                    }/*,
                    cursor: 'pointer',
                        point: {
                            events: {
                                click: function () {  
                                    $scope.detailsCharTime.isCollapsed = true;
                                    $scope.detailsCharTime.titleChartTime = 'Gráfica del día ' + moment( this.name, 'DD-MM-YYYY' ).format( 'YYYY-MM-DD' );;
                                    $scope.detailsCharTime.totalCotizacionesDia = 'Total de cotizaciones tomadas este día: ' + this.y;
                                    $scope.drawChartTime( this.name );
                                } 
                            }
                        }*/
                }
            },
            tooltip: {
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            }
        },
        series: [{
            name: 'Consultas',
            colorByPoint: false,
            data: ( function () {

                var data = [];

                for ( var i = 0 ; i < $scope.objectDate.length ; i ++ ) {
                    data.push({
                        name: $scope.objectDate[i].name,
                        y: $scope.objectDate[i].count
                    });
                }
                return data;
            }())
        }],
        title: {
            text: 'Consultas tomadas por rango de fecha'
        },
        subtitle: {
            text: 'Lineal'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Consultas tomadas'
            }
        },
        legend: {
            enabled: false
        }
    };
    
    $scope.chartDateAmount = {
        options: {
            chart:{
                //type: 'areaspline',
                type: 'bar',
                reflow: true,
                zoomType: 'x'
            },
            plotOptions: {
                spline: {
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 3
                        }
                    }
                },
                areaspline: {
                    fillOpacity: 0.5
                },
                series: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true
                    }/*,
                    cursor: 'pointer',
                        point: {
                            events: {
                                click: function () {  
                                    $scope.detailsCharTime.isCollapsed = true;
                                    $scope.detailsCharTime.titleChartTime = 'Gráfica del día ' + moment( this.name, 'DD-MM-YYYY' ).format( 'YYYY-MM-DD' );;
                                    $scope.detailsCharTime.totalCotizacionesDia = 'Total de cotizaciones tomadas este día: ' + this.y;
                                    $scope.drawChartTime( this.name );
                                } 
                            }
                        }*/
                }
            },
            tooltip: {
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            }
        },
        series: [{
            name: 'Ingresos',
            colorByPoint: false,
            data: ( function () {

                var data = [];

                for ( var i = 0 ; i < $scope.objectDate.length ; i ++ ) {
                    data.push({
                        name: $scope.objectDate[i].name,
                        y: $scope.objectDate[i].amount
                    });
                }
                return data;
            }())
        }],
        title: {
            text: 'Ingresos por rango de fecha'
        },
        subtitle: {
            text: 'Lineal'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Ingreso del día'
            }
        },
        legend: {
            enabled: false
        }
    };
    
    $scope.chartServiceTotal = {
            options: {
                chart:{
                    type: 'pie',
                    reflow: true
                },
                plotOptions: {
                    series: {
                        pointPadding: 0.2,
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true
                        },
                        cursor: 'pointer'/*,
                        point: {
                            events: {
                                click: function () {
                                    $scope.getDetailCharts( this.name, "ChartAgents", this.y );
                                }
                            }
                        }*/
                    },
                    pie: {
                        plotBorderWidth: 0,
                        allowPointSelect: true,
                        cursor: 'pointer',
                        size: '100%',
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}: <b>{point.y}</b>'
                        } 
                    },
                    line: {
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 5
                            }
                        }
                    }
                }
            },
            series: [{

                name: 'Servicios',
                colorByPoint: true,
                data: ( function () {

                    var data = [];

                    for ( var i = 0 ; i < $scope.serviceCount.length ; i ++ ) {
                        data.push({
                            name: $scope.serviceCount[i].name,
                            y: $scope.serviceCount[i].count
                        });
                    }
                    return data;
                }())
            }],
            title: {
                text: 'Servicios proporcionados'
            },
            subtitle: {
                text: 'Pastel'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Servicio'
                }
            },
            legend: {
                enabled: false
            }
        };
    
    window.dispatchEvent(new Event('resize'));

}