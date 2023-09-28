import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Center, Heading, HStack, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorMode } from "@chakra-ui/react"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Center>
  <TableContainer>
  <Table colorScheme={`teal`} variant={`striped`}>
  <Thead>
  <Tr>
  <Th>
  {`###`}
</Th>
  <Th>
  {`Producto`}
</Th>
  <Th>
  {`Precio`}
</Th>
  <Th>
  {`Qty`}
</Th>
  <Th>
  {`Total`}
</Th>
</Tr>
</Thead>
  <Tbody>
  <Tr>
  <Td>
  {`1`}
</Td>
  <Td>
  {`'''''''''''''''''''''''''''''''''''''''''''''''''''''`}
</Td>
  <Td>
  {`30`}
</Td>
  <HStack>
  <Button colorScheme={`red`} onClick={(_e) => addEvents([Event("state.decrement", {})], (_e))} sx={{"borderRadius": "1em"}}>
  {`-`}
</Button>
  <Heading sx={{"fontSize": "2em"}}>
  {state.count}
</Heading>
  <Button colorScheme={`green`} onClick={(_e) => addEvents([Event("state.increment", {})], (_e))} sx={{"borderRadius": "1em"}}>
  {`+`}
</Button>
</HStack>
</Tr>
  <Tr>
  <Td>
  {`1`}
</Td>
  <Td>
  {`Taco`}
</Td>
  <Td>
  {`31`}
</Td>
  <HStack>
  <Button colorScheme={`red`} onClick={(_e) => addEvents([Event("state.decrement", {})], (_e))} sx={{"borderRadius": "1em"}}>
  {`-`}
</Button>
  <Heading sx={{"fontSize": "2em"}}>
  {state.count}
</Heading>
  <Button colorScheme={`green`} onClick={(_e) => addEvents([Event("state.increment", {})], (_e))} sx={{"borderRadius": "1em"}}>
  {`+`}
</Button>
</HStack>
</Tr>
  <Tr>
  <Td>
  {`1`}
</Td>
  <Td>
  {`Taco`}
</Td>
  <Td>
  {`32`}
</Td>
  <HStack>
  <Button colorScheme={`red`} onClick={(_e) => addEvents([Event("state.decrement", {})], (_e))} sx={{"borderRadius": "1em"}}>
  {`-`}
</Button>
  <Heading sx={{"fontSize": "2em"}}>
  {state.count}
</Heading>
  <Button colorScheme={`green`} onClick={(_e) => addEvents([Event("state.increment", {})], (_e))} sx={{"borderRadius": "1em"}}>
  {`+`}
</Button>
</HStack>
  <Td sx={{"colorScheme": "green"}}>
  {`00000`}
</Td>
</Tr>
</Tbody>
</Table>
</TableContainer>
</Center>
  <NextHead>
  <title>
  {`Counter`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
