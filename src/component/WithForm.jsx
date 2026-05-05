"use client";

import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { FaSave, FaUser } from "react-icons/fa";

export function WithForm() {
  const onSubmit=async (e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const image=e.target.image.value;
    await authClient.updateUser({
      name,image
    })
  }
  return (
    <Modal>
      <Button variant="secondary">Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update settings</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. 
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="text">
                    <Label>Image</Label>
                    <Input placeholder="Enter Image URL" />
                  </TextField>
                  <div className="flex gap-5">
                     <Button type="submit" slot="close"><FaSave/> Save Changes</Button>
                          <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                 
                  </div>
                  
                 
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
             
             
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}