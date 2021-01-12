export const getEmail = () => {
    let newArrEmail: Array<string> = [];
    newArrEmail.push((document.getElementById('email') as any).value);
    console.log(newArrEmail);
    return newArrEmail;
}