import firebase from 'firebase';

export const documents = (snapshot: firebase.firestore.QuerySnapshot) => {

    const documents: any[] = [];
    snapshot.forEach(snaphijo => {
        documents.push(
            {
                id: snaphijo.id,
                ...snaphijo.data()
            });

    });
    console.log(documents)
    return documents;
}