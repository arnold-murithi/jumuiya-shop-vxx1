import "@testing-library/jest-dom"
import { useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { act } from "@testing-library/react"
import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"
import {renderHook} from '@testing-library/react'



// Mock the hooks from next/navigation
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}))

// Mock the useDebouncedCallback
jest.mock('use-debounce', () => ({
    useDebouncedCallback: jest.fn((fn, delay) => fn),
  }))

describe('handleSearch with useDebouncedCallback', () => {
  let mockSetIsTyping: jest.Mock
  let mockReplace: jest.Mock
  let mockSearchParams: URLSearchParams
  const mockPathname = '/test'

  beforeEach(() => {
    jest.useFakeTimers()
    mockSetIsTyping = jest.fn()
    mockReplace = jest.fn()
    mockSearchParams = new URLSearchParams();

    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
    (usePathname as jest.Mock).mockReturnValue(mockPathname);
    (useRouter as jest.Mock).mockReturnValue({ replace: mockReplace });
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should set isTyping to true when searchTerm is not empty', () => {
    const { result } = renderHook(() => {
      const searchParams = useSearchParams()
      const pathname = usePathname()
      const { replace } = useRouter()

      return useDebouncedCallback((searchTerm: string) => {
        const params = new URLSearchParams(searchParams)
        mockSetIsTyping(searchTerm.trim() !== "")
        if (searchTerm) {
          params.set("query", searchTerm)
        } else {
          params.delete("query")
        }
        replace(`${pathname}?${params.toString()}`)
      }, 300)
    })

    act(() => {
      result.current('test')
    });

    (expect(mockSetIsTyping)as any).toHaveBeenCalledWith(true)
  })

  it('should set isTyping to false when searchTerm is empty', () => {
    const { result } = renderHook(() => {
      const searchParams = useSearchParams()
      const pathname = usePathname()
      const { replace } = useRouter()

      return useDebouncedCallback((searchTerm: string) => {
        const params = new URLSearchParams(searchParams)
        mockSetIsTyping(searchTerm.trim() !== "")
        if (searchTerm) {
          params.set("query", searchTerm)
        } else {
          params.delete("query")
        }
        replace(`${pathname}?${params.toString()}`)
      }, 300)
    })

    act(() => {
      result.current('')
    });

    (expect(mockSetIsTyping)as any).toHaveBeenCalledWith(false)
  })

  it('should add query parameter when searchTerm is not empty', () => {
    const { result } = renderHook(() => {
      const searchParams = useSearchParams()
      const pathname = usePathname()
      const { replace } = useRouter()

      return useDebouncedCallback((searchTerm: string) => {
        const params = new URLSearchParams(searchParams)
        mockSetIsTyping(searchTerm.trim() !== "")
        if (searchTerm) {
          params.set("query", searchTerm)
        } else {
          params.delete("query")
        }
        replace(`${pathname}?${params.toString()}`)
      }, 300)
    })

    act(() => {
      result.current('test')
    });

    (expect(mockReplace)as any).toHaveBeenCalledWith('/test?query=test')
  })

  it('should remove query parameter when searchTerm is empty', () => {
    const { result } = renderHook(() => {
      const searchParams = useSearchParams()
      const pathname = usePathname()
      const { replace } = useRouter()

      return useDebouncedCallback((searchTerm: string) => {
        const params = new URLSearchParams(searchParams)
        mockSetIsTyping(searchTerm.trim() !== "")
        if (searchTerm) {
          params.set("query", searchTerm)
        } else {
          params.delete("query")
        }
        replace(`${pathname}?${params.toString()}`)
      }, 300)
    })

    act(() => {
      result.current('')
    });

    (expect(mockReplace)as any).not.toHaveBeenCalledWith();

    act(() =>{
        jest.advanceTimersByTime(300)
    });

    (expect(mockReplace)as any).toHaveBeenCalledWith('/test')
  })
})