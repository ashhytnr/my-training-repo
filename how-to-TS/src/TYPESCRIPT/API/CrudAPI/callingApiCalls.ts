import {CrudApi} from './apiCalls';

// This is just an interface for pets
interface Pets {
    name: string,
    age: number,
    animal: string,
    type: string,
    id?: string,
}

const crudApi = new CrudApi;

/**
 * NOTE: IDs of entries are automatically generated,
 * you can find them via the API's website
 */

async function createRecord() {
    // POST
    const petRecord: Pets = {
        name: "Hammie",
        age: 2,
        animal: "Hamster",
        type: "Small"
    }
    const addNewPetRecord = await crudApi.createRecord(petRecord);
    console.log(addNewPetRecord);
}
// createRecord()

async function updateRecord() {
    // PUT
    const petRecord: Pets = {
        name: "Socks",
        age: 5,
        animal: "Cat",
        type: "Tuxedo",
    }
    await crudApi.updateRecord(petRecord, "6925bed1d8450603e8beace7");
}
// updateRecord()

async function deleteRecord() {
    // DELETE
    await crudApi.deleteRecord("id here");
}
// deleteRecord()

async function readAllRecords() {
    // GET
    const allRecords = await crudApi.getAllRecords()
    console.log(allRecords)
}
// readAllRecords()

async function readRecord() {
    // GET
    const oneRecord = await crudApi.getRecord("6925bed1d8450603e8beace7")
    console.log(oneRecord)
}
// readRecord()