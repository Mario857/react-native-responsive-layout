import React from 'react';
import { View } from 'react-native';

import { Block, Grid, Section } from 'react-native-responsive-layout';

export default () => (
  <Grid stretchable>
    <Section gap={20}>
      <Block>
        <View style={{ height: 30, backgroundColor: 'green' }} />
      </Block>
      <Block>
        <View style={{ height: 30, backgroundColor: 'red' }} />
      </Block>
      <Block>
        <View style={{ height: 30, backgroundColor: 'red' }} />
      </Block>
      <Block>
        <Section gap={20}>
          <Block size="stretch">
            <View style={{ height: 30, backgroundColor: 'red' }} />
          </Block>
          <Block size="stretch">
            <View style={{ height: 30, backgroundColor: 'green' }} />
          </Block>
          <Block size="stretch">
            <View style={{ height: 30, backgroundColor: 'red' }} />
          </Block>
        </Section>
      </Block>
      <Block>
        <Section gap={40}>
          <Block size="stretch">
            <Section gap={10}>
              <Block>
                <View style={{ height: 30, backgroundColor: 'red' }} />
              </Block>
              <Block>
                <View style={{ height: 30, backgroundColor: 'red' }} />
              </Block>
            </Section>
          </Block>
          <Block size="stretch">
            <View style={{ height: 30, backgroundColor: 'green' }} />
          </Block>
          <Block size="stretch">
            <Section gap={25}>
              <Block>
                <View style={{ height: 30, backgroundColor: 'green' }} />
              </Block>
              <Block>
                <Section gap={4}>
                  <Block size="stretch">
                    <View style={{ height: 30, backgroundColor: 'green' }} />
                  </Block>
                  <Block size="stretch">
                    <View style={{ height: 30, backgroundColor: 'red' }} />
                  </Block>
                  <Block size="stretch">
                    <View style={{ height: 30, backgroundColor: 'red' }} />
                  </Block>
                </Section>
              </Block>
              <Block>
                <Section gap={2}>
                  <Block size="stretch">
                    <View style={{ height: 30, backgroundColor: 'green' }} />
                  </Block>
                  <Block size="stretch">
                    <View style={{ height: 30, backgroundColor: 'red' }} />
                  </Block>
                  <Block size="stretch">
                    <View style={{ height: 30, backgroundColor: 'red' }} />
                  </Block>
                </Section>
              </Block>
            </Section>
          </Block>
        </Section>
      </Block>
      <Block>
        <Section gap={20}>
          <Block size="stretch">
            <View style={{ height: 30, backgroundColor: 'red' }} />
          </Block>
          <Block size="stretch">
            <View style={{ height: 30, backgroundColor: 'green' }} />
          </Block>
          <Block size="stretch">
            <View style={{ height: 30, backgroundColor: 'red' }} />
          </Block>
        </Section>
      </Block>
    </Section>
  </Grid>
);
