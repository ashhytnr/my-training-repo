export class CrudApi {

    async createRecord(record: object) {
        console.log('Adding new record:')

        const response = await fetch('https://crudcrud.com/api/e714c36832f74d2593845d0488389cf8/pets', {
            method: 'POST',
            body: JSON.stringify(record),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        console.log(`POST - API response: ${response.status}, ${response.statusText}`)
        return response.json();
    }

    async updateRecord(record: object, id: string) {
        console.log('Updating record')

        const response = await fetch(`https://crudcrud.com/api/e714c36832f74d2593845d0488389cf8/pets/${id}`, {
            method: 'PUT',
            body: JSON.stringify(record),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        console.log(`PUT - API response: ${response.status}, ${response.statusText}`)
        return response.json();
    }

    async deleteRecord(id: string) {
        console.log('Deleting record')

        const response = await fetch(`https://crudcrud.com/api/e714c36832f74d2593845d0488389cf8/pets/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        console.log(`DELETE - API response: ${response.status}, ${response.statusText}`)
        return response.json();
    }

    async getAllRecords() {
        console.log('Getting ALL records')
        const response = await fetch(`https://crudcrud.com/api/e714c36832f74d2593845d0488389cf8/pets`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        console.log(`GET - API response: ${response.status}, ${response.statusText}`)
        return response.json();
    }

    async getRecord(id: string) {
        console.log('Getting ONE record')
        const response = await fetch(`https://crudcrud.com/api/e714c36832f74d2593845d0488389cf8/pets/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        console.log(`GET - API response: ${response.status}, ${response.statusText}`)
        return response.json();
    }

}