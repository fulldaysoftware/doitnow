type obj = { count:number, order: number, name: string }
let monthData = [
{ count: 31, order: 0, name: 'January', previous: 'December', next: 'February' },
  { count: 28, order: 1, name: 'February', previous: 'January', next: 'March' },
  { count: 31, order: 2, name: 'March', previous: 'February', next: 'April' },
  { count: 30, order: 3, name: 'April', previous: 'March', next: 'May' },
  { count: 31, order: 4, name: 'May', previous: 'April', next: 'June' },
  { count: 30, order: 5, name: 'June', previous: 'May', next: 'July' },
  { count: 31, order: 6, name: 'July', previous: 'June', next: 'August' },
  { count: 31, order: 7, name: 'August', previous: 'July', next: 'September' },
  { count: 30, order: 8, name: 'September', previous: 'August', next: 'October' },
  { count: 31, order: 9, name: 'October', previous: 'September', next: 'November' },
  { count: 30, order: 10, name: 'November', previous: 'October', next: 'December' },
  { count: 31, order: 11, name: 'December', previous: 'November', next: 'January' }
];


export const generator = (month: string, year: number) => {
    let monthInformation = []
    if(year%4 == 0){
        monthData[1] = { count: 29, order: 1, name: 'February', previous: 'January', next: 'March' }
        // monthInformation = [...monthData]
    }
    monthInformation = [...monthData]

    const monthextractor = () =>{
        const mainObj:obj[] = [] 
            const monthObjs = monthInformation.map((it, ind, arr) => {
                if(it.name.toLowerCase() == month.toLowerCase()){
                    mainObj[0] = it
                    if(ind === 0){
                        mainObj[1] = arr[11]
                        mainObj[2] = arr[1]
                        
                    }
                    if(ind === 11){
                        mainObj[1] = arr[10]
                        mainObj[2]= arr[0]
                    }
                    else{
                        mainObj[1] = arr[ind-1]
                        mainObj[2] = arr[ind+1]
                    }
                }
            })
            return mainObj
    }
    const offsetGenerator = (count: number, index: number) =>{
        const offset:number[] = []
        for(let i:number = 0; i < index;i++){
            let x = count - i
            offset.push(x)
        }
        return offset.reverse()
    }
    const numberGenerator = (count: number) =>{
        const daycounter: number[] = []
        for(let i = 1; i <= count; i++ ){
            daycounter.push(i)
        }
        return daycounter
    }
   
    const mnt = monthextractor()
   
    const date = new Date(year, mnt[0].order, 1 )
    const ind = date.getDay()
    const count = mnt[0].count
    const offset = offsetGenerator(mnt[1].count, ind)
    const monthdays = numberGenerator(count)
    let padder:number[] = []
    const markupGen = (count: number[], value: boolean) =>{
        return count.map((it) => {
            return {t: value, c: it}
        })
    }
    const days = [...markupGen(offset, false), ...markupGen(monthdays, true)]

    if(days.length < 42) {
        padder = numberGenerator(42 - days.length)
    }
    const tempdays = [...days, ...padder]
    const allDays = [...days, ...markupGen(padder, false)]

    const classifiedDate = [[...allDays.slice(0, 7)],[...allDays.slice(7, 14)],[...allDays.slice(14, 21)],[...allDays.slice(21, 28)],[...allDays.slice(28, 35)],[...allDays.slice(35, 42)] ]
    return { year: date.getFullYear(),month: mnt[0].name, days: classifiedDate }
}

