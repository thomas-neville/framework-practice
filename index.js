var gators = [
  {name: "Elvis Vessley",
    hobbies: "surfing, dancing",
    weight: 865,
    likesIceCream: true,
    imgSource: "https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/10c413dcc4d444acbd6810f483028933"
  },{name: "Little Britches",
    hobbies: "shaking, eating fruit",
    weight: 361,
    likesIceCream: true,
    imgSource: "http://nebula.wsimg.com/5df260927e75521ad0f18fae842e522e?AccessKeyId=00569247111AAAE64481&disposition=0&alloworigin=1"
  },{name: "Wanda Snapson",
    hobbies: "having parties",
    weight: 712,
    likesIceCream: false,
    imgSource: "http://www.vaguebuttrue.com/images/1449775760-alligatorclimbsfenceWEBSITE.jpg"
  },{name: "Ray Chomples",
    hobbies: "Chomping",
    weight: 480,
    likesIceCream: false,
    imgSource: "https://cdn.drawception.com/images/panels/2012/6-2/cRBZBCGxm9-2.png"
  }
]

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    alligators: gators
  },
  methods: {
    test: function(){
      console.log("test was called")
    },
    filter: function(){
      console.log("filter was called")
      // if checkbox is checked
      if(document.getElementById("icecream").checked){
      
      // set this.alligators to only likesIceCream === true
      this.alligators = gators.filter(gator => gator.likesIceCream)
      } else {    
        // all alligators
        this.alligators = gators
      }
    },
    sortAsc: function(){
      console.log("sortAsc called")
      this.alligators = gators.sort(function(a, b){return a.weight - b.weight})
    },
    sortDesc: function(){
      console.log("sortDesc called")
      this.alligators = gators.sort(function(a, b){return b.weight - a.weight})
    }
  }
})
