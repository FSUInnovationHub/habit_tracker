const two_days = 86400000

export const compare_dates = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const difference = date1.getTime() - date2.getTime()

    if(difference === 0){
        console.log(`Habit has been done today`)
        return 'done'
    } else if(difference > two_days){
        console.log(`Habit has expired`)
        return 'expired'
    } else{
        console.log(`Habit is still active`)
        return 'active'
    }
}

export const get_date = (date = new Date()) => {
    let bar = new Date(date)
    let foo = new Date(bar.getFullYear(), bar.getMonth(), bar.getDate())
    return foo
}

// export const debugDates = () => {
//     // const today = new Date(2022, 2, 2)
//     const yesterday = new Date(2022, 3, 11)
//     const two_days_ago = new Date(2022, 3, 10)

//     const habits = [
//         {
//             name:'Exercise',
//             counter:1,
//             lastUpdated:yesterday,
//             prevUpdated:two_days_ago,
//             completed:false
//         },
//         {
//             name:'Meditate',
//             counter:5,
//             lastUpdated:yesterday,
//             prevUpdated:yesterday,
//             completed:false
//           },
//           {
//             name:'Journaling',
//             counter:3,
//             lastUpdated:yesterday,
//             prevUpdated:yesterday,
//             completed:false
//           },
//           {
//             name:'Read',
//             counter:7,
//             lastUpdated:yesterday,
//             prevUpdated:yesterday,
//             completed:false
//           }
//     ]

//     localStorage.setItem('habits', JSON.stringify(habits))
//     console.log(localStorage.getItem('habits'))
// }