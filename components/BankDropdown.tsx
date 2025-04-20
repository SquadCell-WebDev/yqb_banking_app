"use client"

import Image from "next/image"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select"
import { formUrlQuery, formatAmount } from "@/lib/utils"

const dummyAccount: Account = {
  id: "default",
  name: "Demo Account",
  currentBalance: 1000,
  appwriteItemId: "default-account-id",
  type: "savings",
  institutionName: "Mock Bank",
  accountNumber: "000000000",
}

export const BankDropdown = ({
  accounts = [dummyAccount],
  setValue,
  otherStyles,
}: BankDropdownProps) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [selected, setSelected] = useState<Account | null>(null)

  useEffect(() => {
    if (accounts.length > 0) {
      setSelected(accounts[0])
    }
  }, [accounts])

  const handleBankChange = (id: string) => {
    const account = accounts.find((account) => account.appwriteItemId === id)

    if (!account) return
    setSelected(account)

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: id,
    })
    router.push(newUrl, { scroll: false })

    if (setValue) {
      setValue("senderBank", id)
    }
  }

  if (!selected) return null // or a loading spinner

  return (
    <Select
      defaultValue={selected.appwriteItemId}
      onValueChange={(value) => handleBankChange(value)}
    >
      <SelectTrigger
        className={`flex w-full bg-white gap-3 md:w-[300px] ${otherStyles}`}
      >
        <Image
          src="icons/credit-card.svg"
          width={20}
          height={20}
          alt="account"
        />
        <p className="line-clamp-1 w-full text-left">{selected.name}</p>
      </SelectTrigger>
      <SelectContent
        className={`w-full bg-white md:w-[300px] ${otherStyles}`}
        align="end"
      >
        <SelectGroup>
          <SelectLabel className="py-2 font-normal text-gray-500">
            Select a bank to display
          </SelectLabel>
          {accounts.map((account: Account) => (
            <SelectItem
              key={account.id}
              value={account.appwriteItemId}
              className="cursor-pointer border-t"
            >
              <div className="flex flex-col">
                <p className="text-16 font-medium">{account.name}</p>
                <p className="text-14 font-medium text-blue-600">
                  {formatAmount(account.currentBalance)}
                </p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
