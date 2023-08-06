//Q1.
import {d3} from "d3";
console.log("Question 1 : ");
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
class Statistics{
  constructor(ages){
    this.ages=ages;
  }
  count(){
    return this.ages.length;
  }
  sum(){
    var sum=0;
    for(i=0;i<this.ages.length;i++){
      sum+=this.ages[i];
    }
    return sum;
  }
  min(){
    var min=999;
    for(i=0;i<this.ages.length;i++){
      if(this.ages[i]<min){
        min=this.ages[i];
      }
    }
    return min;
  }
  max(){
    var max=0;
    for(i=0;i<this.ages.length;i++){
      if(this.ages[i]>max){
        max=this.ages[i];
      }
    }
    return max;
  }
  range(){
    var range=self.max()-self.min();
    return range;
  }
  mean(){
    return self.sum()/this.ages.length;
  }
  median(){
    var length=this.ages.length;
    var median;
    if(this.ages.length%2==0){
      median=(this.ages[length/2]+this.ages[(length/2)+1])/2;
    }
    else{
      median=this.ages[(length+1)/2];
    }
    return median;
  }
  mode(){
    var count=0;
    var mode=0;
    for(var i=0;i<this.ages.length;i++){
      var c=0;
      for(var j=0;j<this.ages.length;j++){
        if(this.ages[i]==this.ages[j]){
          c++;
        }
      }
      if(c>count){
        mode=this.ages[i];
        count=c;
      }
    }
    return {'mode': mode,'count': count};
  }
  variance(){
    return d3.variance(ages);
  }
  std(){
    return d3.deviation(ages);
  }
  freqDist(){

  }
  describe(){
    console.log('Count:', self.count()); 
    console.log('Sum: ', self.sum()); 
    console.log('Min: ', self.min());
    console.log('Max: ', self.max()); 
    console.log('Range: ', self.range()); 
    console.log('Mean: ', self.mean()); 
    console.log('Median: ',self.median()); 
    console.log('Mode: ', self.mode()); 
    console.log('Standard Deviation: ', self.std());
    console.log('Variance: ',self.var());
    console.log('Frequency Distribution: ',self.freqDist());
  }
}
var statistics=new Statistics(ages);
console.log(statistics.describe());
