import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Input } from "./ui/input";

export default function Login() {
    return (
        <div className="flex flex-row items-center justify-center h-full w-full">
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action="">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <h1>Email</h1>
                                <Input id="email" type="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1>Password</h1>
                                <Input id="password" type="password" />
                            </div>
                            <Button type="submit">Login</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}