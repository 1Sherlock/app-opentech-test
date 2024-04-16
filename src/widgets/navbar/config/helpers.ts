export const getTextByPath = (path: string|null) => {
    if (path)
        return path.startsWith("/main/create-payment") ? "Создать платеж" : path.startsWith("/main/transactions") ? "Транзакции" : path.startsWith("/main/my-employees") ? "Мои сотрудники" : path;
    else
        return path;
}