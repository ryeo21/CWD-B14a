window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Simple Line Chart"
        },
        data: [{        
            type: "line",
                indexLabelFontSize: 16,
            dataPoints: [
                { y: 450 },
                { y: 414},
                { y: 520, indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle" },
                { y: 460 },
                { y: 450 },
                { y: 500 },
                { y: 480 },
                { y: 480 },
                { y: 410 , indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
                { y: 500 },
                { y: 480 },
                { y: 510 }
            ]
        }]
    });
    chart.render();
    
    }



    window.onload = function () {

        var chart = new CanvasJS.Chart("chartContainer1", {
            animationEnabled: true,
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            title:{
                text: "Top Oil Reserves"
            },
            axisY: {
                title: "Reserves(MMbbl)"
            },
            data: [{        
                type: "column",  
                showInLegend: true, 
                legendMarkerColor: "grey",
                legendText: "MMbbl = one million barrels",
                dataPoints: [      
                    { y: 300878, label: "Venezuela" },
                    { y: 266455,  label: "Saudi" },
                    { y: 169709,  label: "Canada" },
                    { y: 158400,  label: "Iran" },
                    { y: 142503,  label: "Iraq" },
                    { y: 101500, label: "Kuwait" },
                    { y: 97800,  label: "UAE" },
                    { y: 80000,  label: "Russia" }
                ]
            }]
        });
        chart.render();
        
        }
        
    