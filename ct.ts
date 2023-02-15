export class Robot {
  public static robotname: string;
  constructor() {
    let rs='';
    const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ct=0;
    while(ct<2){
      rs+=chars.charAt(Math.floor(Math.random()*chars.length))
      ct +=1;
    }
    Robot.robotname = rs + Math.floor(Math.random() * 1000);
  }

  public get name(): string {
    return Robot.robotname;
  }

  public resetName(): void {
   let rs='';
    const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ct=0;
    while(ct<2){
      rs+=chars.charAt(Math.floor(Math.random()*chars.length))
      ct +=1;
    }
    Robot.robotname = rs + Math.floor(Math.random() * 1000);
    // throw new Error('Implement Robot#resetName')
  }

  public static releaseNames(): void {
    Robot.robotname=''
    // throw new Error('Implement Robot.releaseNames')
  }
}
let robot = new Robot();
console.log(robot.name);
robot.resetName();
console.log(robot.name);
