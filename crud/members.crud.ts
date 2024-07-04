import { members } from "../Models/members";

async function createMember(data:any) {
    try {
        const member = await members.create(data);
        console.log('created member');
        
      } catch (error) {
      console.error('Error in creating member');
      throw error;
    }
  }

const data={
    name: 'Soumya',
    address:'Mancherial',
    phone_number:'9995533218',
    email:'soumya@gmail.com' 
};
createMember(data);


async function readMemberById(id:any) {
    try {
      const member = await members.findOne({ where: { id: id } });
      if (member) {
        console.log('member found:',member.toJSON());
        return member;
      } else {
        console.log('member not found');
        return null;
      }
    } catch (error) {
      console.error('Error finding member:', error);
      throw error;
    }
  }
  
 
const memId = 3; 
readMemberById(memId);


async function readAllMembers() {
    try {
      const member = await members.findAll();
      console.log('AlleBooks:',member.map(member =>member.toJSON()));
      return member;
    } catch (error) {
      console.error('Error reading Books:', error);
    }
  }
  

readAllMembers();

async function updateMemberById(id:any, newData:any) {
    try {
      await members.update(newData, {
        where: { id: id }
      });
      console.log('member updated successfully');
    } catch (error) {
      console.error('Error updating member:', error);
    }
}
const newData={
    name: 'Keerthi',
    address:'Medak',
    email:'keerthi@gmail.com' 
}
updateMemberById(4,newData);

async function deleteMemberById(id:any) {
    try {
      await members.destroy({
        where: { id: id }
      });
      console.log('member deleted successfully');
    } catch (error) {
      console.error('Error deleting member:', error);
    }
}

deleteMemberById(5);

export{createMember,readMemberById,readAllMembers,updateMemberById,deleteMemberById};