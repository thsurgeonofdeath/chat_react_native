import React from 'react'
import {View, Text} from 'react-native'

type ChatProps = {
    username: string;
    image: string;
}
const Chat = ({username, image}: ChatProps) => {
  return (
    <View>
        <Text>Hello {username}! You can chat here shortly</Text>
    </View>
  )
}

export default Chat
