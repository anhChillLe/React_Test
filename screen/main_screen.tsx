import React from "react";

import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function Main(): JSX.Element {
    return <View style={style.container}>
        <ListItem items={data}/>
    </View>
}

const style = StyleSheet.create({

    container: {
        padding: 8,
    },

    textStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        fontStyle: "normal",
        color: 'white',
        backgroundColor: 'green',
        borderRadius: 12,
        padding: 15,
        margin: 8,
        textAlign: 'center'
    }
});

type item = {
    name: string;
    age: number;
}

type ListProp = {
    items: item[];
}

const ListItem = (props: ListProp) => {
    const { items } = props
    return <ScrollView>
        {items.map((item, index) => <Item key={index} name = {item.name} age={item.age}/>)}
    </ScrollView>
}

const Item = (item: item) => {
    const { name, age } = item

    return <View style={styles.itemContainer}>
        <Text style = {styles.title}>Tên: {name}</Text>
        <Text style = {styles.subTitle}>Tuổi: {age}</Text>
    </View>
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: Colors.lighter,
        padding: 8,
        margin: 4,
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: '800'
    },
    subTitle: {
        fontSize: 18,
        fontWeight: "400",
    }
})

export default Main

const data = [
    {
        name: 'Le anh chieu',
        age: 23
    },
    {
        name: 'Le anh chieu',
        age: 23
    },
    {
        name: 'Le anh chieu',
        age: 23
    },
    {
        name: 'Le anh chieu',
        age: 23
    },
    {
        name: 'Le anh chieu',
        age: 23
    },
    {
        name: 'Le anh chieu',
        age: 23
    },
    {
        name: 'Le anh chieu',
        age: 23
    },
    {
        name: 'Le anh chieu',
        age: 23
    },
    {
        name: 'Le anh chieu',
        age: 23
    },
    {
        name: 'Le anh chieu',
        age: 23
    },
]