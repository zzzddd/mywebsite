# def fizzBuzz(n):
#     # Write your code here
#     count=1
#     while(count<n):
#         if count%5==0 and count%3==0 :
#             print("FizzBuzz")
#             count=count+1
#         elif count%5==0 :
#             print("Buzz") 
#             count=count+1
#         elif count%3 :
#             print("Fizz") 
#             count=count+1
#         else:
#             print(count)
#             count=count+1
#     return count

# fizzBuzz(10)





# # Function to test balanced brackets



# def BalancedBrackets(Str):
#     # stack for storing opening brackets
#     stack = []

#     # Loop for checking string 
#     for char in Str:
#         # if its opening bracket, so push it in the 
#         # stack
#         if char == '{' or char == '(' or char == '[':
#             stack.append(char) # push
#         # else if its closing bracket then
#         # check if the stack is empty then return false or
#         # pop the top most element from the stack
#         # and compare it
#         elif char == '}' or char == ')' or char == ']':
#             if len(stack) == 0:
#                 return False
#             top_element = stack.pop() # pop
#             # function to compare whether two 
#             # brackets are corresponding to each other
#             if not Compare(top_element, char):
#                 return False
#     # lastly, check that stack is empty or not  
#     if len(stack) != 0:
#         return False
              
#     return True
# def Compare(opening, closing):
#     if opening == '(' and closing == ')':
#         return True
#     if opening == '[' and closing == ']':
#         return True
#     if opening == '{' and closing == '}':
#         return True  
#     return False

# # # Test function 
# print(BalancedBrackets("{123(456[.768]))}"))


# # Function to check two corresponding brackets#########################################################






# class Node:
#     def __init__(self, value=0, next=None):
#         self.value = value
#         self.next = next
#         # self.prev=prev
#     def __repr__(self):
#         if self.next is  None:
#             return str(self.value)
#         return str(self.value) + '<->' + repr(self.next)

# def create_linked_list(arr):
#     if not arr:
#         return None
#     return Node(arr[0], create_linked_list(arr[1:]))

# def remove_nth_from_end(head, n):
#     length = get_linked_list_length(head)
#     return remove_nth(head, length - n)

# def get_linked_list_length(head):
#     length = 0
#     tmp = head
#     while tmp != None:
#         length += 1
#         tmp = tmp.next
#     return length

# def remove_nth(head, n):
#     if head == None:
#         return None
#     if n == 0:
#         return head.next
#     head.next = remove_nth(head.next, n - 1)
#     return head

# def remove_nth_from_end_one_pass(head, n):
#     if n < 1:
#         return head
#     leading = head
#     trailing = head
#     for i in range(n):
#         if leading == None:
#             return head
#         leading = leading.next
#     if leading == None:
#         return head.next
#     while leading != None:
#         leading = leading.next
#         if leading == None:
#             trailing.next = trailing.next.next
#             return head
#         trailing = trailing.next
#     return head
# # print(create_linked_list([1, 2, 3, 4, 5]))
# print(remove_nth_from_end(create_linked_list([11, 21, 33, 44, 55,88,99,45]), 3)) # 1->2->3->5
# # print(remove_nth_from_end(create_linked_list([1]), 1)) # None
 
# # print(remove_nth_from_end(create_linked_list([]), 0)) # None
# # print(remove_nth_from_end(create_linked_list([1, 2, 3, 4, 5]), 7)) # 1->2->3->4->5

# # print(remove_nth_from_end_one_pass(create_linked_list([1, 2, 3, 4, 5]), 2)) # 1->2->3->5
# # print(remove_nth_from_end_one_pass(create_linked_list([1]), 1)) # None
# # print(remove_nth_from_end_one_pass(create_linked_list([]), 0)) # None
# print(remove_nth_from_end_one_pass(create_linked_list([1, 2, 3, 4, 5,66,77,88]), 4)) # 1->2->3->4->5












######################Fibonacci(n)########################################


# def fibonacci(nterms):
#     

#     # first two terms
#     n1, n2 = 0, 1
#     count = 0

#     # check if the number of terms is valid
#     if nterms <= 0:
#         print("Please enter a positive integer")
#     elif nterms == 1:
#         print("Fibonacci sequence upto",nterms,":")
#         print(n1)
#     else:
#         print("Fibonacci sequence:")
#     while count < nterms:
#         print(n1)
#         nth = n1 + n2
#         # update values
#         n1 = n2
#         n2 = nth
#         count += 1

# fibonacci(-9)




# return a list of lists of length 3 
def three_Sum(num):
    if len(num)<3: return []
    num.sort()
    result=[]
    for i in range(len(num)-2):
        left=i+1
        right=len(num)-1
        if i!=0 and num[i]==num[i-1]:continue
        while left<right:
            if num[left]+num[right]==-num[i]:
                result.append([num[i],num[left],num[right]])
                left=left+1
                right=right-1
                while num[left]==num[left-1] and left<right:left=left+1
                while num[right]==num[right+1] and left<right: right=right-1
            elif num[left]+num[right]<-num[i]:
                left=left+1
            else:
                right=right-1
    return result
 
nums1=[-1,0,1,2,-1,-4]
nums2 = [-25,-10,-7,-3,2,4,8,10]
print(three_Sum(nums1))
print(three_Sum(nums2))

#######################################n^3solutiton####################################cd ..


# def find3NoArraySum3Is0(myl,x):
  
#   result = []
#   for i in range(len(myl)):
#     for j in range(i+1, len(myl)):
#       for k in range(j+1, len(myl)):
#         if myl[i] + myl[j] + myl[k] ==x:
#           c = [myl[i],myl[j], myl[k]]
#           c.sort()
#           if c not in result:
#             result.append(c)
#   print(result)
# find3NoArraySum3Is0( [-1,0,1,2,-1,-4,1,1,1,0,3,2],3)
# find3NoArraySum3Is0( [-25,-10,-7,-3,2,4,8,10],3)