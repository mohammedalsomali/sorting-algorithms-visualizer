# def twoSum(nums1, nums2):
#         if len(nums1) != 0:
#             for i in range(len(nums1)):
#                 nums2.append(nums1[i])
#             for i in range(len(nums2)):
#                 for j in range(1, len(nums2)-i):
#                     if nums2[i]> nums2[i+j]:
#                         nums2[i],nums2[i+j]=nums2[i+j],nums2[i]
#         x = len(nums2)/2
#         if len(nums2) %2 == 0:
#             y = nums2[int(x)] 
#             z = nums2[int(x-1)] 
#             return ( y + z ) /2
#         else:
#             return nums2[x]


# def main():
#     x = twoSum([], [3,8])

#     print(x)

# main()

a = ["3","4","7"]
b = "".join(a)
print(int(b))