import React from 'react'
import {Box ,VStack ,Heading , Text} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
function PaymentSuccess() {
    const searchQuery = useSearchParams()[0]
    // console.log(searchQuery.get("reference"))
    const referenceNum = searchQuery.get("reference");
  return (
    <Box>
        <VStack h = "100vh" justifyContent={"center"} >
            <Heading textTransform ={"uppercase"}> Order Successful </Heading>
            <Text>
                Reference No. {referenceNum}
            </Text>
            
        </VStack>
    </Box>
  )
}

export default PaymentSuccess

