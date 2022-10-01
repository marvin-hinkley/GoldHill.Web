import { Link } from "gatsby";
import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const NavFlyoutContainer = ({ title, flyoutLinks }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-gray-100 cursor-pointer">
            {title}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-2xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 p-7 bg-white lg:grid-cols-2">
                  {flyoutLinks.map((flyoutLink, index) =>
                    <Link
                      className="-m-3 flex rounded-lg items-center p-2 hover:bg-gray-100"
                      to={flyoutLink.link}
                      key={index}
                    >
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                            {flyoutLink.text}
                          </p>
                          <p className="text-sm text-gray-500">
                            {flyoutLink.description}
                          </p>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default NavFlyoutContainer