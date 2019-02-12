package entity;

import java.io.Serializable;

/**
 * @author SHIH
 * @date 2019/01/24
 * @description
 **/
public class Result implements Serializable {
    private boolean success;
    private String meseage;

    public Result(boolean success, String meseage) {
        this.success = success;
        this.meseage = meseage;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMeseage() {
        return meseage;
    }

    public void setMeseage(String meseage) {
        this.meseage = meseage;
    }
}
