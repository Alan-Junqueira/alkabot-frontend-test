'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

import { Comment } from '../@types/coment'
import Link from 'next/link'

interface IAccondironComents {
  comments: Comment[]
}

export const AccordionComents = ({ comments }: IAccondironComents) => {
  return (
    <>
      {comments.map((coment) => (
        <Accordion.Root type="multiple" key={coment.id}>
          <Accordion.Item
            value={`item-${coment.id}`}
            className="first:rounded-t last:rounded-b"
          >
            <Accordion.Header className="border-b-[1px] border-solid border-purple-800">
              <Accordion.Trigger className="group flex flex-1 items-center justify-between bg-gray-100 outline-none w-full px-1 py-3 gap-2 text-justify font-bold">
                <span className="flex-1 text-purple-800">{coment.name}</span>
                <ChevronDownIcon
                  className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 w-8 text-purple-800"
                  aria-hidden
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden bg-black bg-opacity-50 text-gray-100 px-4 py-3 text-sm font-light">
              <p>{coment.body}</p>
              <div className="flex justify-end">
                <Link className="underline" href={`mailto:${coment.email}`}>
                  {coment.email}
                </Link>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      ))}
    </>
  )
}
