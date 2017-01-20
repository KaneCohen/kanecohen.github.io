var data = {
    simple: {
    req_rate: {
      label: "Request rate",
      yLabel: 'Requests/s',
      frameworks: {
        laravel4: {
          data: [
          [20, 20], [40, 39.7], [60, 59.8], [80, 79.6], [100, 97.2]
          ],
          label: "Laravel 4"
        },
        laravel5: {
          data: [
          [20, 20], [40, 39.9], [60, 59.5], [80, 78.5], [100, 97.9]
          ],
          label: "Laravel 5"
        },
        symfony: {
          data: [
          [20, 20], [40, 39.9], [60, 59.7], [80, 78.6], [100, 99.2]
          ],
          label: "Symfony 2.6"
        },
      }
    },
    avg_rep_rate: {
      label: "Average reply rate",
      yLabel: 'Replies/s',
      frameworks: {
        laravel4: {
          data: [
            [20, 20], [40, 39.9], [60, 59.7], [80, 79.5], [100, 99.3]
          ],
          label: "Laravel 4"
        },
        laravel5: {
          data: [
            [20, 20], [40, 39.9], [60, 59.7], [80, 79.6], [100, 99.2]
          ],
          label: "Laravel 5"
        },
        symfony: {
          data: [
            [20, 20], [40, 39.9], [60, 59.7], [80, 79], [100, 99.2]
          ],
          label: "Symfony 2.6"
        },
      }
    },
    resp_time: {
      label: "Response time",
      yLabel: 'Time (ms)',
      frameworks: {
        laravel4: {
          data: [
            [20, 92.8], [40, 81], [60, 89.6], [80, 101.2], [100, 96.8]
          ],
          label: "Laravel 4"
        },
        laravel5: {
          data: [
            [20, 84.4], [40, 82.5], [60, 85.1], [80, 86.3], [100, 87.5]
          ],
          label: "Laravel 5"
        },
        symfony: {
          data: [
            [20, 101.5], [40, 108], [60, 98.8], [80, 102], [100, 182.3]
          ],
          label: "Symfony 2.6"
        },
      }
    },

  },

  routes: {
    req_rate: {
      label: "Request rate",
      yLabel: 'Requests/s',
      frameworks: {
        laravel4: {
          data: [
            [20, 20], [40, 39.5], [60, 58.7], [80, 73.6], [100, 80.5]
          ],
          label: "Laravel 4"
        },
        laravel5: {
          data: [
            [20, 20], [40, 39.6], [60, 59.7], [80, 70.9], [100, 89.5]
          ],
          label: "Laravel 5"
        }
      }
    },
    avg_rep_rate: {
      label: "Average reply rate (replies/s)",
      yLabel: 'Replies/s',
      frameworks: {
        laravel4: {
          data: [
            [20, 20], [40, 39.8], [60, 57.7], [80, 77.2], [100, 88.7]
          ],
          label: "Laravel 4"
        },
        laravel5: {
          data: [
            [20, 20], [40, 39.9], [60, 59.3], [80, 70.4], [100, 88]
          ],
          label: "Laravel 5"
        }
      }
    },
    resp_time: {
      label: "Response time",
      yLabel: 'Time (ms)',
      frameworks: {
        laravel4: {
          data: [
            [20, 101.8], [40, 157.9], [60, 725.3], [80, 282.6], [100, 1735.6]
          ],
          label: "Laravel 4"
        },
        laravel5: {
          data: [
            [20, 115], [40, 137.6], [60, 702], [80, 1953], [100, 1720]
          ],
          label: "Laravel 5"
        }
      }
    },

  },

  cached_routes: {
    req_rate: {
      label: "Request rate",
      yLabel: 'Requests/s',
      frameworks: {
        laravel4: {
          data: [
            [20, 19.8], [40, 39], [60, 58.1], [80, 69.2], [100, 82]
          ],
          label: "Laravel 4"
        },
        laravel5: {
          data: [
            [20, 19.8], [40, 39.9], [60, 57.1], [80, 72.8], [100, 80.1]
          ],
          label: "Laravel 5"
        }
      }
    },
    avg_rep_rate: {
      label: "Average reply rate (replies/s)",
      yLabel: 'Replies/s',
      frameworks: {
        laravel4: {
          data: [
            [20, 20], [40, 39.8], [60, 59.6], [80, 76.8], [100, 88.8]
          ],
          label: "Laravel 4"
        },
        laravel5: {
          data: [
            [20, 20], [40, 39.9], [60, 57.1], [80, 75.8], [100, 93.8]
          ],
          label: "Laravel 5"
        }
      }
    },
    resp_time: {
      label: "Response time",
      yLabel: 'Time (ms)',
      frameworks: {
        laravel4: {
          data: [
            [20, 118], [40, 266.2], [60, 153.1], [80, 302.4], [100, 1536.7]
          ],
          label: "Laravel 4"
        },
        laravel5: {
          data: [
            [20, 109.3], [40, 111.7], [60, 241.2], [80, 253.3], [100, 410.4]
          ],
          label: "Laravel 5"
        }
      }
    },

  },

  cached_routes_and_val: {
    req_rate: {
      label: "Request rate",
      yLabel: 'Requests/s',
      frameworks: {
        laravel4: {
          data: [
            [20, 19.7], [40, 38.8], [60, 54.1], [80, 66.5], [100, 80.3]
          ],
          label: "Laravel 4"
        },
        laravel5: {
          data: [
            [20, 19.9], [40, 39.1], [60, 53.4], [80, 67.6], [100, 79.9]
          ],
          label: "Laravel 5"
        }
      }
    },
    avg_rep_rate: {
      label: "Average reply rate (replies/s)",
      yLabel: 'Replies/s',
      frameworks: {
        laravel4: {
          data: [
            [20, 20], [40, 39.8], [60, 56.3], [80, 65.2], [100, 90]
          ],
          label: "Laravel 4"
        },
        laravel5: {
          data: [
            [20, 20], [40, 39.8], [60, 54.1], [80, 72.4], [100, 78.2]
          ],
          label: "Laravel 5"
        }
      }
    },
    resp_time: {
      label: "Response time",
      yLabel: 'Time (ms)',
      frameworks: {
        laravel4: {
          data: [
            [20, 127.1], [40, 138.3], [60, 703.6], [80, 551.8], [100, 1692.3]
          ],
          label: "Laravel 4"
        },
        laravel5: {
          data: [
            [20, 117.6], [40, 134.1], [60, 856], [80, 1538.9], [100, 1683.5]
          ],
          label: "Laravel 5"
        }
      }
    },

  },
};

function findMax(frameworks) {
  var points = [];
  for (j in frameworks) {
    frameworks[j].data.forEach(function(v) {
      points.push(v[1]);
    });
  }
  return d3.max(points);
}

function renderChart(el, stats, width, height, margin, animation) {
  var line, max, k;

  maxY = findMax(stats.frameworks);

  var x = d3.scale.linear()
    .domain([0, 100])
    .range([0, width]);

  var y = d3.scale.linear()
    .domain([0, maxY + (maxY / 100) * 10])
    .range([height, 0]);

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

  el.innerHTML = '';

  var svg = d3.select(el).append("svg")
    .attr("width", width + margin + margin)
    .attr("height", height + margin + margin)
    .append("g")
    .attr("transform", "translate(" + margin + "," + margin + ")");


  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("x", width)
    .attr("dy", "-.71em")
    .style("text-anchor", "end")
    .text("Connections/s");

  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text(stats.yLabel);



  svg.append("g")
    .attr("class", "label")
    .attr("transform", "translate(0," + 0 + ")")
    .append("text")
    .attr("x", width/2)
    .style("text-anchor", "middle")
    .text(stats.label);

  for (j in stats.frameworks) {

    var line = d3.svg.line()
      .interpolate("cardinal")
      .x(function(d) { return x(d[0]); })
      .y(function(d) { return y(d[1]); });

    var path = svg.append("path")
      .datum(stats.frameworks[j].data)
      .attr("class", function() {
        return 'line ' + j;
      })
      .attr("d", line);

    var totalLength = path.node().getTotalLength();

    if (animation !== false) {
      path.attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(300)
        .ease("linear")
        .attr("stroke-dashoffset", 0);
    }

  }

}

var content = document.getElementById('content');
var timer, el, k;

for (k in data) {
    if (data.hasOwnProperty(k)) {
      el = document.getElementById(k);
      renderChart(el, data[k].req_rate, content.offsetWidth, content.offsetWidth/2, 40);
    }
}

document.body.addEventListener('click', function(e) {
  var group, buttons, chart, el;
  if (e.target.nodeName === 'BUTTON' && e.target.parentNode.classList.contains('button-group')) {
    group = e.target.parentNode;
    el = group.nextElementSibling;
    buttons = group.querySelectorAll('button');
    chartName = group.getAttribute('data-chart');
    chartType = e.target.getAttribute('data-type');

    Array.prototype.forEach.call(buttons, function(el, i){
      el.classList.remove('active');
    });
    e.target.classList.add('active');

    el.setAttribute('data-type', chartType);
    renderChart(el, data[chartName][chartType], content.offsetWidth - 60, content.offsetWidth/2, 40);
  }
});

window.addEventListener('resize', function(e) {
  timer = setTimeout(function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      var charts = document.querySelectorAll('.svg-container');
      Array.prototype.forEach.call(charts, function(el) {
        var chartName = el.id;
        var chartType = el.getAttribute('data-type');
        renderChart(el, data[chartName][chartType], content.offsetWidth - 60, content.offsetWidth/2, 40, false);
      });
    }
  }, 300);

});
