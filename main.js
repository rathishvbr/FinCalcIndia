import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Paragraph, Dialog, Portal } from 'react-native-paper';

const FDCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rateOfInterest, setRateOfInterest] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState(null);
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const calculateFD = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rateOfInterest) / 100;
    const t = parseFloat(tenure);

    const amount = p * Math.pow(1 + r / 4, 4 * t);
    const interest = amount - p;

    setResult({
      maturityAmount: amount.toFixed(2),
      interestAmount: interest.toFixed(2),
    });

    showDialog();
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Principal Amount"
        value={principal}
        onChangeText={(text) => setPrincipal(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Rate of Interest (%)"
        value={rateOfInterest}
        onChangeText={(text) => setRateOfInterest(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Tenure (years)"
        value={tenure}
        onChangeText={(text) => setTenure(text)}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button mode="contained" onPress={calculateFD} style={styles.button}>
        Calculate
      </Button>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>FD Calculation Result</Dialog.Title>
          <Dialog.Content>
            {result && (
              <Paragraph>
                Maturity Amount: ₹{result.maturityAmount}
                {"\n"}
                Interest Earned: ₹{result.interestAmount}
              </Paragraph>
            )}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default FDCalculator;
