import { ArrowArcLeft } from 'phosphor-react-native';
import React, {useState} from 'react'
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';

import {FeedbackTypes} from '../../components/widget';
import { feedbackTypes } from '../../utils/feedbackTypes';
import {captureScreen} from 'react-native-view-shot'

import { styles } from './styles';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';


interface Props{
    feedbackType: FeedbackTypes;
}

export  function Form({feedbackType}:Props) {
    const [screenshot, setScreenshot] = useState<string | null>(null);

    const  feedbackTypeInfo = feedbackTypes[feedbackType]

    function handleScreenshot(){
        captureScreen({
            format: 'jpg',
            quality: 0.8
        })
        .then(uri => setScreenshot(uri))
        .catch(error => console.log(error))
    }

    function handleScreenshotRemove(){
        setScreenshot(null);
    }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
                <ArrowArcLeft
                    size={24}
                    weight="bold"
                    color={theme.colors.text_secondary}

                />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Image
                    source={feedbackTypeInfo.image}
                    style={styles.image}
                />
                <Text style={styles.titleText}>
                    {feedbackTypeInfo.title}
                </Text>
            </View>

        </View>
        
        <TextInput
            multiline
            style={styles.input}
            placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
            placeholderTextColor={theme.colors.text_secondary}
        />

        <View style={styles.footer}>
            <ScreenshotButton
               onTakeShot={handleScreenshot}
               onRemoveShot={handleScreenshotRemove}
               screeshot={screenshot}

            />

            <Button
                isLoading={false}
            
            />
        </View>
      
    </View>
  )
}

