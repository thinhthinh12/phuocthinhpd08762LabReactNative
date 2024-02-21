import { StyleSheet, Text, View, TextInput} from "react-native";
import {styles} from "./styles"
import { useState } from "react";
const ViewComponent = () => {
const [name, setName] = useState('');
    return (
        <View style = {styles.container}>
            <TextInput value={name}
            onChangeText={setName}
            placeholder="Nhap ho ten"
            style={styles.tipStyle}></TextInput>
            {/* Line 1*/}
            <Text style = {styles.baseText}>
                Em vao doi bang {' '}
                <Test style={[styles.boldText, colorText('red')]}>vang do</Test> anh vao
                doi bang {' '}
                <Text style={[styles.boldText, colorText('yesllow')]}>nuoc tra</Text>
            </Text>

            {/* Line 2*/}
            <Text style = {styles.baseText}>
                Bang con mua thom{' '}
                <Text style={[styles.boldText, sizeText(20), style.italicText]}>
                    mui dat{' '}
                </Text>{' '}
                va{' '}
                <Text style={[sizeText(20), style.italicText]}>
                    bang hoa dai moc truoc nha
                </Text>
            </Text>

            {/* Line 3 */}
            <Text
                style = {[
                    styles.baseText,
                    styles.italicText,
                    styles.boldText,
                    colorText('gray'),
                ]}>
                Em vao doi bang ke hoach anh vao doi bang mong mo
            </Text>

            {/* Line 4 */}
            <Text style={[styles.baseText]}>
                Ly tri em la (' ')
                <Text 
                    style={styleText({
                        textDecorationLine: 'underLine',
                        letterSpacing: 20,
                        fonrWeight: 'bold',
                    })}>
                    {' '}
                    cong cu{' '}
                </Text>
                con trai tim anh la
                <Text
                style={styleText({
                    textDecorationLine: 'underline',
                    letterSpacing: 20,
                    fonrWeight: 'bold',
                })}>
                {' '}
                dong co{' '}
                </Text>
            </Text>

            {/* Line 5 */}
            <Text style={[styles.baseText, styleText({textAlign: 'right'})]}>
                Em vao doi nhieu dong nghiep anh vao doi nhieu than tinh
            </Text>

            {/* Line 6 */}
            <Text
                style={[
                    styles.baseText,
                    styleText({
                        textAlign: 'center',
                        fonrWeight: 'bold',
                        color: 'orange',
                    }),
                ]}>
                Anh chi muon chan minh dap dat khong muon dap ai duoi chan minh
            </Text>

            {/* Line 7 */}
            <Text
                style={[
                    styles.baseText,
                    styleText({
                      fonrWeight: 'bold',
                      color: 'black',
                  }),
              ]}>
              Em vao doi bang <Text style={colorText('white')}>may trang</Text> em
              vao doi bang <Text style={colorText('yellow')}>nang xanh</Text>
          </Text>

          {/* Line 8 */}
          <Text
              style={[
                  styles.baseText,
                  styleText({
                      fonrWeight: 'bold',
                      color: 'black',
                  }),
              ]}>
              Em vao doi bang <Text style={colorText('yellow')}>dai lo</Text> va con
              duong do gio <Text style={colorText('white')}>vang anh</Text>
          </Text>
      </View>
  );
};
export default ViewComponent;

const colorText = color => ({
  color,
})