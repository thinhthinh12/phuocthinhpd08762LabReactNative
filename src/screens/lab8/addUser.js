import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const AddUser = ()=>{
const [name, setName] = useState('');
const [birhtday, setBirthday] = useState('');
const saveData = async ()=>{
    console.warn("call add");
    const url = 'http://172.16.55.195:3000/user';
    let result = await fetch (url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({name, birhtday}),
    });
    result = await result.json();
    if(result){
        console.warn("Add success");
    }
}
    return(
        <View style ={styles.modelContent}>
            <TextInput style ={styles.input} 
            placeholder='Enter name'
            value={name}
            onChangeText={text => setName(text)}/>
             <TextInput style ={styles.input} 
             placeholder='Enter birthday'
            value={birhtday}
            onChangeText={text => setBirthday(text)}/>
            <View style = {styles.buttonGroup}>
                <TouchableOpacity style ={styles.button} onPress={saveData}>
                    <Text style ={styles.buttonText}>Add New</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default AddUser;