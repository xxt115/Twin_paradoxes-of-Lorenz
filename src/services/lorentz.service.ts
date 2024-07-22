
export const MathServiceSymbol = Symbol('math-service')

export class MathService {

    /**
     * 洛伦兹变换，将飞船外的物理量变换为以飞船内为参考系
     * @param time 飞船外的时间
     * @param speedOfCraft 飞船的速度
     * @param speedOfLight 光速
     */
    public Lorentz(time: number, speedOfCraft: number, speedOfLight: number) {
        const x = speedOfCraft * time;
        return ({
            // 飞船走过的距离
            distance: x,
            // 飞船内时间
            timeInCraft: (time - (speedOfCraft / speedOfLight ** 2 * x)) / Math.sqrt(1 - (speedOfCraft ** 2 / (speedOfLight ** 2)))
        })
    }

}