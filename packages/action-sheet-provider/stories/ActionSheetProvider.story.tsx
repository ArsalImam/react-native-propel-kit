import React, {createElement, useRef} from 'react';
import {Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import Button from '@mgcrea/react-native-button';
import ModalDialog, {ModalDialogHandle} from '@mgcrea/react-native-modal-dialog';
import DatePicker from '@mgcrea/react-native-date-picker';

import {ActionSheetContext, ActionSheetContextProps} from '../src';

storiesOf('ActionSheetProvider', module)
  // .addParameters({options: {isToolshown: false, showNav: false, showPanel: false, isFullscreen: true}})
  .add('default view', () => (
    <ActionSheetContext.Consumer>
      {actionSheet => (
        <Button
          onPress={() => {
            (actionSheet as NonNullable<ActionSheetContextProps>).showWithOptions(
              {
                title: 'Hello',
                message: `This component implements a custom ActionSheet and provides the same way to drawing it`,
                options: ['Cancel', 'Remove', 'Update'],
                destructiveButtonIndex: 1,
                cancelButtonIndex: 0
              },
              buttonIndex => {
                // console.warn('onButtonPress', {buttonIndex});
              }
            );
          }}
          title="Show ActionSheet"
        />
      )}
    </ActionSheetContext.Consumer>
  ))
  .add('with many options', () => (
    <ActionSheetContext.Consumer>
      {actionSheet => (
        <Button
          onPress={() => {
            (actionSheet as NonNullable<ActionSheetContextProps>).showWithOptions(
              {
                title: 'Hello',
                message: `This component implements a custom ActionSheet and provides the same way to drawing it`,
                options: [
                  'Cancel',
                  'Remove',
                  'Update',
                  'Cancel',
                  'Remove',
                  'Update',
                  'Cancel',
                  'Remove',
                  'Update',
                  'Cancel',
                  'Remove',
                  'Update'
                ],
                destructiveButtonIndex: 1,
                cancelButtonIndex: 0
              },
              buttonIndex => {
                // console.warn('onButtonPress', {buttonIndex});
              }
            );
          }}
          title="Show ActionSheet"
        />
      )}
    </ActionSheetContext.Consumer>
  ))
  .add('compare view', () => {
    const modalDialogRef = useRef<ModalDialogHandle>(null);
    return (
      <>
        <ActionSheetContext.Consumer>
          {actionSheet => (
            <>
              <Button
                onPress={() => {
                  (actionSheet as NonNullable<ActionSheetContextProps>).showWithOptions(
                    {
                      title: 'Hello',
                      message: `This component implements a custom ActionSheet and provides the same way to drawing it`,
                      options: ['Cancel', 'Remove', 'Update'],
                      destructiveButtonIndex: 1,
                      cancelButtonIndex: 0
                    },
                    buttonIndex => {
                      // console.warn('onButtonPress', {buttonIndex});
                    }
                  );
                }}
                title="Show ActionSheet"
              />
            </>
          )}
        </ActionSheetContext.Consumer>
        <Button
          onPress={() => {
            if (modalDialogRef.current) {
              modalDialogRef.current.show();
            }
          }}
          title="Open ModalDialog"
        />
        <ModalDialog ref={modalDialogRef}>
          <Text style={{fontSize: 32, padding: 32}}>Hello World</Text>
        </ModalDialog>
        <DatePicker
          placeholder="Pick a date"
          locale="fr-FR"
          style={{width: 200, height: 40, backgroundColor: 'white', color: 'black'}}
        />
      </>
    );
  });
