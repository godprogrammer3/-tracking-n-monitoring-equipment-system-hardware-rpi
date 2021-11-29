export class ResponseDto {
  successful: boolean;
  errorCode: string;
  message: string;
  data: any;
}

export function getResponse(errorCode: string, data: any): ResponseDto {
  const response = ResponseConstants.find((response) => {
    return response.errorCode === errorCode;
  });
  if (errorCode == '00') {
    response.data = data;
  }
  return response;
}

const ResponseConstants: ResponseDto[] = [
  {
    successful: true,
    errorCode: '00',
    message: 'success',
    data: {},
  },
];
