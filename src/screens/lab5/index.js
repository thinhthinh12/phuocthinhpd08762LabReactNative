import { ImageBackground, StatusBar, Text, View } from "react-native";
import { Styles } from "./styles";
import { TouchableOpacity } from "react-native";



const Lab5 = () => {
    return(
        <View style ={Styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <ImageBackground
            source={require('../../assets/images/travel.png')}
            style={Styles.Image}>
                <View style={Styles.details}>
                    <Text style={Styles.text}>
                    <Text style={Styles.firstLine}>Discover {'\n'}</Text>
                    <Text style={Styles.secondLine}>World with us</Text>
                    </Text>
                    <Text style={Styles.textstyle}>Discover World with us</Text>
                    <TouchableOpacity style={Styles.button}>
                        <Text style={Styles.buttonText}>Get Start</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};
export default Lab5;