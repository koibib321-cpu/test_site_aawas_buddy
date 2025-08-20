const prompt = require("prompt-sync")()

function printInfo(){

    console.log("1. Add contact");
    console.log("2. Delete contact");
    console.log("3. View contact");
    console.log("4. Search contact");
    console.log("5. Exit");


}

printInfo()
console.log()



function Add_contact() {

    const user_name = prompt("User name: ");
    const user_number = prompt("Phone Number: ")
    const contact = {
        name: user_name,
        number: user_number
    }
    contacts.push(contact);
    console.log("Phone number Added Successfully")
}

function Delete_contact(){

    console.log("Saved Contact ids: ")

    for (i = 0; i < contacts.length; i++){

        const contact = contacts[i] 
        console.log((i + 1).toString() + ". "+ "Name: "+ contact.name);
        console.log("   Number: "+ contact.number);
        console.log()


    }

    const deleteindex = parseInt(prompt("Which conatct to delete: "))

    if (isNaN(deleteindex) || deleteindex > contacts.length){
        console.log("Invalid input")
        return 
    }

    contacts.splice(deleteindex -1, 1)

    console.log("contact has been deleted successfully")
    console.log()

    

}

function View_contact(contacts){

    for (let contact of contacts){
        console.log()
        console.log("Name: " + contact.name)
        console.log("Number: " + contact.number)
    }
}

function Search_contact(){

    const searchstr = prompt("Enter the contact to be searched: ").toLowerCase()
    const result = [];

    for (let contact of contacts){
        if (contact.name.toLowerCase().includes(searchstr)){
            result.push(contact)

        }
    }

    View_contact(result)

}

const contacts = []

let using = true;

while (using){

    console.log()
    const number = prompt("Enter operation (1-5): " )

    switch(number){

        case "1":
            Add_contact()
            break;

        case "2":
            Delete_contact()
            break;

        case "3":
            View_contact(contacts)
            break;
        
        case "4":
            Search_contact()
            break;

        case "5":
            using = false;
            break;
        
        default:
            console.log("Unknown Input. Please do a valid command")
            break

    }

}
