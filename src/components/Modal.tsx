"use client";

import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { addUserEmailToProduct } from "@/lib/actions";

interface Props{
  productId : string
}

const Modal = ({ productId } : Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  async function handleDialog() {
    setSubmitting(true);

    await addUserEmailToProduct(productId, email);

    setSubmitting(false);
    setEmail('');
    closeModal();
  }
  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="py-4 px-4 bg-slate-900 hover:bg-opacity-70 rounded-[30px] text-white text-lg font-semibold w-fit mx-auto flex items-center justify-center gap-3 min-w-[200px]"
        >
          Track Product
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex gap-[90%]"
                  >
                    <Image
                      src="/assets/icons/logo.svg"
                      alt="Logo"
                      width={25}
                      height={25}
                    />
                    <Image
                      src="/assets/icons/x-close.svg"
                      alt="close"
                      width={25}
                      height={25}
                      className="cursor-pointer"
                      onClick={closeModal}
                    />
                  </Dialog.Title>
                  <div className="mt-8">
                    <p className="text-lg text-slate-900 font-bold">
                      Stay updated with product pricing alert right in your
                      inbox !
                    </p>
                    <p className="text-gray-400 text-md mt-2">
                      Never miss a bargain again with our timely alerts !
                    </p>
                    <p className="font-semibold mt-5">Email Address</p>
                    <div className="flex gap-5 border border-gray-300 p-2 mt-4 rounded-md items-center">
                      <Image
                        src="/assets/icons/mail.svg"
                        alt="mail"
                        width={25}
                        height={25}
                        className="mx-5"
                      />
                      <input
                        type="text"
                        className="rounded-md w-[90%]"
                        placeholder="Enter your email-id"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center w-full rounded-md border border-transparent outline-none bg-black px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      onClick={handleDialog}
                    >
                      {
                        submitting ? 'Submitting...' : 'Track'
                      }
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
