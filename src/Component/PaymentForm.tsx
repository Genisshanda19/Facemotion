import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';

interface PaymentFormProps {
  onSubmit: (data: any) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb={4}>
        <Text mb={2}>Nomor Rekening</Text>
        <Input {...register('accountNumber')} />
      </Box>
      <Box mb={4}>
        <Text mb={2}>Upload Bukti Bayar</Text>
        <Input type="file" {...register('paymentProof')} />
      </Box>
      <Button type="submit" colorScheme="teal" variant="solid" size="md" rounded="md" w="100%">
        Submit Payment
      </Button>
    </form>
  );
};

export default PaymentForm;
