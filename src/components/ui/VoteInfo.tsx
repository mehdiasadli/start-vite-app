import { Box, Text } from '@mantine/core';

function InfoText({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <Text color='gray.8'>{children}</Text>
    </li>
  );
}

export default function VoteInfo() {
  return (
    <Box component='ul' px={25}>
      <InfoText>
        Səs vermək istədiyiniz namizədin üzərinə klikləyin. Açılan paneldə 1, 2 və 3 ballıq
        düymələri görəcəksiniz.
      </InfoText>
      <InfoText>
        Əgər verdiyiniz bir səsi silmək istəyirsinizsə, namizədin yanındakı "X" düyməsini klikləyin.
      </InfoText>
      <InfoText>
        Səsvermə prosesini bitirdikdə, səsinizin qeydə alınması üçün aşağıda "Yadda saxla" düyməsini
        klikləyin.
      </InfoText>
      <InfoText>
        Yadda saxla düyməsinə basdıqdan sonra, əgər səsvermə uğurla sona çatsa, bu kateqoriyaya bir
        daha girə bilməyəcək, yəni səsinizi dəyişə bilməyəcəksiniz. Bu səbəbdən, yadda saxlamazdan
        əvvəl hər şeyi doğru etidiyinzdən əmin olun.
      </InfoText>
    </Box>
  );
}
