import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const AlertDialogs = ({isOpen, onClose, cancelRef}) => {
    const navi=useNavigate()
    // const { isOpen, onOpen, onClose } = useDisclosure()
    // const cancelRef = React.useRef()
    const handlePath=()=>{
        onClose();
        navi("/login")
    }
  return (
    <>
        <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
               Successfully Registered
            </AlertDialogHeader>

            <AlertDialogBody>
              You need to login again.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handlePath} ml={3}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default AlertDialogs