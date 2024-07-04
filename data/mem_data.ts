import { members } from "../Models/members";
const insertMembers = async () => {
    try {
        const member = await members.bulkCreate([
            { name: 'Nikitha',address:'Hyderabad',phone_number:'9876567898',email:'nikitha@gmail.com' },
            { name: 'Vinay',address:'Banglore',phone_number:'9776655441',email:'vinay@gmail.com' },
            { name: 'Sreeja',address:'Jagityal',phone_number:'9152436789',email:'sreeja@gmail.com' },
            { name: 'Nagusha',address:'Warangal',phone_number:'9899002098',email:'nagusha@gmail.com' },
            { name: 'Anjani',address:'Nizamabad',phone_number:'9800088788',email:'anjani@gmail.com' },
            { name: 'Usha',address:'Warangal',phone_number:'9870009008',email:'usha@gmail.com' }
        ]);
        console.log('members inserted successfully');
        return member;
    } catch (err) {
        console.error("Error inserting members:", err);
        return null;
    }
};
export{insertMembers};