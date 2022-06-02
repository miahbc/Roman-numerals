def to_roman(num):
    # print(num)
    rnum = []
    list = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
    list.reverse()
    nums = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    nums.reverse()
    # print(len(list))
    # print(len(nums))
    for x in nums:
        print(x)
        # if num > x and num < x+1:
        #     print(num)
    
    # print(d)
    # for x in list:
        # print reversed(list)
        # print list2


print(to_roman(1))
print(to_roman(3))
print(to_roman(4))

# print(to_roman(1) == 'I')
# print(to_roman(3) == 'III')
# print(to_roman(4) == 'IV')


        # 'I': 1,
        # 'V': 5,
        # 'X': 10,
        # 'L': 50,
        # 'C': 100,
        # 'D': 500,
        # 'M': 1000