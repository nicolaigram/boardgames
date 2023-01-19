import { useEffect, useState } from "react"

export const useCustomWordList = () => {
    const [data, setData] = useState<any>({})
    const fetchAndSetCustomWordList = async () => {
      try {
        const request = await fetch("https://gist.githubusercontent.com/nicolaigram/79921861e1665cc60fef6409677b6990/raw/codenames_wordlist.txt")
        const response = await request.text()
        const customWordListData: any = {}
        let currentIndex: string = ""
        response.split("\n").forEach((line: string) => {
          if (line.includes("-- ")) {
            const index = line.split(" ")[1]
            customWordListData[index] = []
            currentIndex = index
          } else if (currentIndex.length > 0) {
            customWordListData[currentIndex].push({"da": line})
          }
        })
        setData(customWordListData)
      } catch (error) {
        console.error("Something went wrong")
        console.log(error)
      }
    }
  
    useEffect(() => {
      fetchAndSetCustomWordList()
    },[])

    return data
  }